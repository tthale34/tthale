<?php
require 'config.php';
require 'DB.php';
session_start();
if (isset($_POST['id'])) {
    // Create connection
    $connection = DB::connectDB();
    $results = DB::deleteItem($connection,$_POST['id']);
       
    //DB::closeConnection($connection);
    return $results;
}