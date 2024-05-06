<?php


class DB {

    public static function connectDB() {
        // Create connection
        $connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        // Check connection
        if ($connection->error) {
            throw new Exception("<br>Connection failed: " . $connection->error . "<br>");
        }
        return $connection;
    }
    public static function initializeDemoItems($connection) {
        $result = $connection->query("select item_name from items");
        if (!$result) {
            if(!self::createDemoItems($connection)){
                throw new Exception("Failed to initialize demo items.".$connection->error);
            }
                       
        }
    }
    public static function insertItems($item_name, $item_cat, $item_desc, $item_img_src, $item_price, $item_type, $connection) {
        $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) "
                . "VALUES ('" . $item_name . "','" . $item_cat . "','" . $item_desc . "','" . $item_img_src . "','" . $item_price . "','$item_type')";
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception("Failed to insert items from uploaded files. ".$connection->error);
        }
        return $result;
    }
    public static function createDemoItems($connection) {
        $my_query = "CREATE TABLE items ( `id` INT(255) NOT NULL AUTO_INCREMENT,
            `item_name` TEXT COLLATE utf8_bin NOT NULL , 
            `item_cat` TEXT COLLATE utf8_bin NULL , 
            `item_desc` TEXT COLLATE utf8_bin NULL ,
            `item_img_src` TEXT COLLATE utf8_bin NULL , 
            `item_price` INT COLLATE utf8_bin NULL , 
            `item_type` TEXT COLLATE utf8_bin NULL DEFAULT NULL , PRIMARY KEY (`id`)) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1;";

        if ($connection->query($my_query) === TRUE) {
            $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) VALUES ('Denim shirt','Shirt','NEW','https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg','120','demo')";
            if ($connection->query($my_query) === TRUE) {
                $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) VALUES ('Sweat shirt','Sports Wear',null,'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg','139','demo')";
                if ($connection->query($my_query) === TRUE) {
                    $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) VALUES ('Grey Blouse','Sport Wear','Best Seller','https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg','99','demo')";
                    if ($connection->query($my_query) === TRUE) {
                        $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) VALUES ('Black Jacket','Outwear',null,'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg','219','demo')";
                        if ($connection->query($my_query) === TRUE) {
                            $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) VALUES ('Denim shirt','Shirt','NEW','https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg','120','demo')";
                            if ($connection->query($my_query) === TRUE) {
                                $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) VALUES ('Sweat shirt','Sports Wear',null,'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg','139','demo')";
                                if ($connection->query($my_query) === TRUE) {
                                    $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) VALUES ('Grey Blouse','Sport Wear','Best Seller','https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg','99','demo')";
                                    if ($connection->query($my_query) === TRUE) {
                                        $my_query = "INSERT INTO items (item_name,item_cat,item_desc,item_img_src,item_price,item_type) VALUES ('Black Jacket','Outwear',null,'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg','219','demo')";
                                        if ($connection->query($my_query) === TRUE) {
                                            
                                        } else {
                                            throw new Exception("<br>Failed to add item 8: " . $connection->error . "<br>");
                                        }
                                    } else {
                                        throw new Exception("<br>Failed to add item 7: " . $connection->error . "<br>");
                                    }
                                } else {
                                    throw new Exception("<br>Failed to add item 6: " . $connection->error . "<br>");
                                }
                            } else {
                                throw new Exception("<br>Failed to add item 5: " . $connection->error . "<br>");
                            }
                        } else {
                            throw new Exception("<br>Failed to add item 4: " . $connection->error . "<br>");
                        }
                    } else {
                        throw new Exception("<br>Failed to add item 3: " . $connection->error . "<br>");
                    }
                } else {
                    throw new Exception("<br>Failed to add item 2: " . $connection->error . "<br>");
                }
            } else {
                throw new Exception("<br>Failed to add item 1: " . $connection->error . "<br>");
            }
        } else {
            throw new Exception("<br>Failed to create table: " . $connection->error . "<br>");
        }
        return true;
    }
    public static function closeConnection($connection) {
        $connection->close();
    }
    public static function getItems($connection) {
        $my_query = "Select id,item_name,item_cat,item_desc,item_img_src,item_price,item_type from items";
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Error querying item: ' . $connection->error);
        }
        return $result;
    }
    public static function getItem($connection,$id) {
        $my_query = "Select id,item_name,item_cat,item_desc,item_img_src,item_price,item_type from Items Where id = '".$id."'";
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Error querying items: ' . $connection->error);
        }
        return $result;
    }
    public static function getItems_SI($connection, $sessionId) {
        $my_query = "Select id,item_name,item_cat,item_desc,item_img_src,item_price,item_type from items Where item_type = '" . $sessionId . "'";
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Error querying items: ' . $connection->error);
        }
        return $result;
    }
    public static function getSearchedItems($connection, $search_word, $sessionId) {
        if (isset($sessionId)) {
            $my_query = "Select id,item_name,item_cat,item_desc,item_img_src,item_price,item_type from items Where item_type = '" . $sessionId . "' and (item_name LIKE '%" . $search_word . "%' OR item_cat LIKE '%" . $search_word . "%' OR item_desc LIKE '%" . $search_word . "%' OR item_img_src LIKE '%" . $search_word . "%' OR item_price LIKE '%" . $search_word . "%' OR item_type LIKE '%" . $search_word . "%')";
        } else {
            $my_query = "Select id,item_name,item_cat,item_desc,item_img_src,item_price,item_type from items Where item_name LIKE '%" . $search_word . "%' OR item_cat LIKE '%" . $search_word . "%' OR item_desc LIKE '%" . $search_word . "%' OR item_img_src LIKE '%" . $search_word . "%' OR item_price LIKE '%" . $search_word . "%' OR item_type LIKE '%" . $search_word . "%'";
        }
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Error querying search: ' . $connection->error);
        }
        return $result;
    }
    public static function loginValidation($connection, $username, $password) {
        try {
            $my_query = "SELECT email_address,password,client_type from users WHERE email_address = '" . $username . "' and password = '" . $password . "'";
            $result = $connection->query($my_query);
            //Create User table on first login validate
            if (!$result) {
                $result = self::createUserTable($connection);
                if ($result) {
                    $my_query = "SELECT email_address,password,client_type from users WHERE email_address = '" . $username . "' and password = '" . $password . "'";
                    $result = $connection->query($my_query);
                }
            }
            if (!$result) {
                throw new Exception('Login credentials inccorect: ' . $connection->error . ' error no:' . $connection->connect_errno);
            }
        } catch (Exception $ex) {
            throw new Exception('Login credentials inccorect Exception: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }
        
        return $result;
    }
    public static function deleteItem($connection,$id){
        $my_query = "DELETE FROM items where id = ".$id;
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Login credentials inccorect: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }
        return $result;
    }
    public static function registerUser($connection, $name, $surname, $brand_name, $email_address, $password, $client_type) {
        $my_query = "INSERT INTO users (name,surname,brand_name,email_address,password,client_type) "
                . "VALUES ('" . $name . "','" . $surname . "','" . $brand_name . "','" . $email_address . "','" . $password . "','" . $client_type . "')";
        $result = $connection->query($my_query);
        echo $result;
        //Create User table on first login validate
        if (!$result) {
            $result = self::createUserTable($connection);
            if ($result) {
                $my_query = "INSERT INTO users (name,surname,brand_name,email_address,password,client_type) "
                        . "VALUES ('" . $name . "','" . $surname . "','" . $brand_name . "','" . $email_address . "','" . $password . "','" . $client_type . "')";
                $result = $connection->query($my_query);
            }
        }
        if (!$result) {
            throw new Exception('Error registering new user: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }
        return $result;
    }
    public static function createUserTable($connection) {
        $my_query = "CREATE TABLE users ( `id` INT(255) NOT NULL AUTO_INCREMENT , 
            `name` TEXT COLLATE utf8_bin NOT NULL , 
            `surname` TEXT COLLATE utf8_bin NULL , 
            `brand_name` TEXT COLLATE utf8_bin NULL ,
            `email_address` TEXT COLLATE utf8_bin NOT NULL , 
            `password` TEXT COLLATE utf8_bin NULL , 
            `client_type` TEXT COLLATE utf8_bin NULL DEFAULT NULL , PRIMARY KEY (`id`)) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1;";
        $result = $connection->query($my_query);
        return $result;
    }
    public static function chngImgSrc($connection,$img_src,$id){
        $my_query = "UPDATE items SET item_img_src = '".$img_src."' WHERE id = ".$id;
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Error updating image src: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }
        return $result;
    }
    public static function getItemResources($connection,$id){
        $my_query = "SELECT item_name,item_price,id,item_img_src,img1,img2,img3,description,additional_desc FROM items WHERE id = ".$id;
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Error getting item resources: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }
        return $result;
    }
    public static function createItemResources($connection,$main_img,$item_name,$item_price,$id) {
        $my_query = "INSERT INTO item_resources (item_id,item_name,main_img,item_price) VALUES ('".$id."','".$item_name."','".$main_img."',".$item_price.")";
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Error creating item resources: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }
        return $result;
    }
    public static function getLastItemId($connection) {
        $my_query = "SELECT id FROM items ORDER BY id DESC LIMIT 1";
        $result = $connection->query($my_query);
        if (!$result) {
            throw new Exception('Error creating item resources: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }
        return $result->fetch_assoc();
    }
    public static function changeItemResources($connection,$src_value,$type,$id){
        if ($type == 'main_img') {
            $my_query = "UPDATE items SET main_img = '".$src_value."' WHERE id = ".$id;
            $result = $connection->query($my_query);
        }
        if ($type == 'img1') {
            $my_query = "UPDATE items SET img1 = '".$src_value."' WHERE id = ".$id;
            $result = $connection->query($my_query);
        }
        if ($type == 'img2') {
            $my_query = "UPDATE items SET img2 = '".$src_value."' WHERE id = ".$id;
            $result = $connection->query($my_query);
        }
        if ($type == 'img3') {
            $my_query = "UPDATE items SET img3 = '".$src_value."' WHERE id = ".$id;
            $result = $connection->query($my_query);
        }
        if ($type == 'desc') {
            $my_query = "UPDATE items SET description = '".$src_value."' WHERE id = ".$id;
            $result = $connection->query($my_query);
        }
        if ($type == 'additional') {
            $my_query = "UPDATE items SET additional_desc = '".$src_value."' WHERE id = ".$id;
            $result = $connection->query($my_query);
        }
        if (!$result) {
            throw new Exception('Error updating '.$type.' image: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }    
        return $result;
    }
}
