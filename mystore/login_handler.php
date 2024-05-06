<?php
require 'config.php';
require 'DB.php';
session_start();
if (isset($_GET['action']) && $_GET['action'] === "logout") {
    session_destroy();
    try {
        echo ''.WEB_HOST;
        header("Location: " . WEB_HOST, true);
    } catch (Exception $ex) {
        echo '' . $ex->getTrace();
    }
}
if (isset($_POST['username']) && isset($_POST['password'])) {
    try {
        $conn = DB::connectDB();
        $results = DB::loginValidation($conn, $_POST['username'], $_POST['password']);
        if ($results) {
            while ($row = $results->fetch_assoc()) {
                $_SESSION['ID'] = session_id();
                $_SESSION['username'] = $row['email_address'];
                $_SESSION['password'] = $row['password'];
                $_SESSION['client_type'] = $row['client_type'];
                echo '<h5><a class="green-text"><strong>Login successful.</strong></a></h5>';
                header("Location: " . WEB_HOST);
            }
        }
    } catch (Exception $e) {
        echo '<h5><a class="red-text"><strong>' . $e->getMessage() . '</strong></a></h5> ' . $e->getCode();
    }
}
if (isset($_POST['email_address'])) {
    try {
        $conn = DB::connectDB();
        $results = DB::registerUser($conn, $_POST['name'], $_POST['surname'], $_POST['brand_name'], $_POST['email_address'], $_POST['password'], $_POST['client_type']);
        if ($results) {
            while ($row = $results->fetch_assoc()) {
                $_SESSION['ID'] = session_id();
                $_SESSION['username'] = $row['email_address'];
                $_SESSION['password'] = $row['password'];
                $_SESSION['client_type'] = $row['client_type'];
                echo '<h5><a class="green-text"><strong>Registration successful.</strong></a></h5>';
                header("Location: " . WEB_HOST);
            }
        }
    } catch (Exception $e) {
        echo '<h5><a class="red-text"><strong>' . $e->getMessage() . '</strong></a></h5>';
    }
}