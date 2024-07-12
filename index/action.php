<?php
require 'config.php';
require 'DB.php';
session_start();
if(isset($_POST['action']) && isset($_POST['action']) == "login"){
    try {
        $conn = DB::connectDB();
        $results = DB::login($conn, $_POST['surname'], $_POST['passwordLogin']);
        if ($results->num_rows > 0) {
            while ($row = $results->fetch_assoc()) {
                $_SESSION['ID'] = session_id();
                $_SESSION['name'] = $row['FirstName'];
                $_SESSION['surname'] = $row['LastName'];
                $_SESSION['dob'] = $row['DateOfBirth'];
                $_SESSION['province'] = $row['Province'];
                $_SESSION['gender'] = $row['Gender'];                
                echo("login success");
            }
        }  else {
                echo("User credentials incorrect.");
        }
        DB::closeConnection($conn);
    } catch (Exception $e) {
        echo '<h5><a class="red-text"><strong>' . $e->getMessage() . '</strong></a></h5> ' . $e->getCode();
    }
}if(isset($_GET['action']) && isset($_GET['action']) == "logout"){
    session_destroy();
    header("Location:". WEB_HOST);  
}
if(isset($_POST['action']) && $_POST['action'] === "add"){
    try {
        if($_POST['lastname'] != 'undefined' && $_POST['firstname'] != 'undefined'){
            $conn = DB::connectDB();
            $results = DB::add($conn, $_POST['firstname'], $_POST['lastname'],$_POST['password'],$_POST['dob'],$_POST['province'],$_POST['gender'],$_POST['facilitator']);
            if ($results) {
                echo $_POST['lastname'].' has been added successfully.';
                //header("Refresh:3, Url=". WEB_HOST."/?login=0");
            }
            DB::closeConnection($conn);
        }        
    } catch (Exception $exc) {
        echo 'Exception adding user: '.$exc->getTraceAsString().' '.$exc->getMessage();
    }

}
if(isset($_POST['action']) && $_POST['action'] == "edit"){
    try {
        $conn = DB::connectDB();
        $results = DB::edit($conn, $_POST['firstname'], $_POST['lastname'],$_POST['dob'],$_POST['province'],$_POST['gender'],$_POST['facilitator'],$_POST['userId']);
        if ($results) {
            echo $_POST['lastname'].' has been updated successfully.';
        }
        DB::closeConnection($conn);
    } catch (Exception $exc) {
        echo 'Exception editing user: '.$exc->getTraceAsString().' '.$exc->getMessage();
    }

}
if(isset($_POST['action']) && $_POST['action'] == "delete"){
    try {
        $conn = DB::connectDB();
        $results = DB::delete($conn, $_POST['userId']);
        if ($results) {
            echo 'User has been deleted suuccessfully.';               
        }
        DB::closeConnection($conn);       
    } catch (Exception $exc) {
        echo 'Exception deleting user: '.$exc->getTraceAsString().' '.$exc->getMessage();
    }
}

