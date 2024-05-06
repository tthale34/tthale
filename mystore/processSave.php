<?php
require 'config.php';

	// Create connection
	$connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        // Check connection
	if ($connection->connect_error) {
            die("<br>Connection failed: " .$connection->connect_error."<br>");
	}
	if(isset($_POST['new_item'])){
            //Insert new item.
            $item = $_POST['new_item'];
            $my_query = "INSERT INTO mytodolist (Item,flag) VALUES ('".$_POST['new_item']."',0)";
            if ($connection->query($my_query)) {
                Echo ' Item added successfully.<br>';
            } else {			
                echo("<br>Failed to insert item: " .$connection->connect_error."<br>");
            }
	}
	if(isset($_POST['action']) && $_POST['action'] == 'delete'){
            $my_query = "DELETE FROM mytodolist WHERE id = ".$_POST['id'];
            if ($connection->query($my_query) === TRUE) {			
                Echo ' Item deleted successfully.<br>';
            } else {			
                echo("<br>Failed to insert item: " .$connection->connect_error."<br>");
            }
	}
        if(isset($_POST['action']) && $_POST['action'] == 'save'){
            $my_query = "UPDATE mytodolist SET Item = '".$_POST['value']."' WHERE id = ".$_POST['id'];
            if ($connection->query($my_query) === TRUE) {			
                Echo ' Item deleted successfully.<br>';
            } else {			
                echo("<br>Failed to insert item: " .$connection->connect_error."<br>");
            }
	}
        if(isset($_POST['checked'])){
            if($_POST['checked'] == "true"){
                $my_query = "UPDATE mytodolist SET flag = 1 WHERE id = ".$_POST['id'];
            }else{
                $my_query = "UPDATE mytodolist SET flag = 0 WHERE id = ".$_POST['id'];
            }			
            if ($connection->query($my_query) === TRUE) {			
                    Echo ' Item updated successfully.<br>';
            } else {			
                    echo("<br>Failed to insert item: " .$connection->connect_error."<br>");
            }            
	}
	//Close db connection
        $connection->close();
?>