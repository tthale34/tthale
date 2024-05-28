#!/usr/bin/python3

import sys
import configparser
import oracledb

if len(sys.argv) < 2:
  print('ERROR:DSN definition file parameter required', file = sys.stderr)
  exit(1)

config = configparser.ConfigParser(allow_no_value = True)
config.read(sys.argv[1])
user = config['dsn']['user']
password = config['dsn']['password']
host = config['dsn']['host']
port = config['dsn']['port']
service_name = config['dsn']['service_name']
mode = 'thin'
if 'init' in config:
  if 'mode' in config['init']:
    mode = config['init']['mode']

if mode == 'thick':
  oracledb.init_oracle_client()

dsn = f'{user}/{password}@{host}:{port}/{service_name}'
db = oracledb.connect(dsn)

query_txt = sys.stdin.read()

query = db.cursor()
query.execute(query_txt)

column_count = len(query.description)
column_names = ''
for field in query.description:
  if column_names == '':
    column_names = field[0]
  else:
    column_names += "\t" + field[0]
print(column_names)

for row in query.fetchall():
  if row[0] == None:
    output = 'NULL'
  else:
    output = str(row[0]).replace("\t", '\\t').replace("\n", '\\n').replace("\r", '\\r').replace('\\', '\\\\')
  for indx in range(1, column_count):
    if row[indx] == None:
      output += "\tNULL"
    else:
      output += "\t" + str(row[indx]).replace("\t", '\\t').replace("\n", '\\n').replace("\r", '\\r').replace('\\', '\\\\')
  print(output)
