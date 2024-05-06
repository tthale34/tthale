<?php
require 'config.php';
require 'DB.php';
session_start();
try {
    if (isset($_POST['id'])) {
    $newItem = true;
    $count_items = count($_SESSION['demo_cart']);
    // Create connection
    $connection = DB::connectDB();
    //Get item details
    $results = DB::getItem($connection, $_POST['id']);
    $row = $results->fetch_assoc();
    //Close db connection 
    DB::closeConnection($connection);
    if ($count_items > 1) {
        //Loop items in current cart,session cart
        for ($i = 0; $i < count($_SESSION['demo_cart']); $i++) {
            if (isset($_SESSION['demo_cart'][$i][1])) {
                //Check if new items exists
                if ($_SESSION['demo_cart'][$i][1] == $_POST['id']) {
                    $newItem = FALSE;
                    //Increment number,value of item in the cart.
                    if (isset($_POST['number'])) {
                        $_SESSION['demo_cart'][$i] = [$row['item_name'], $row['id'], $_SESSION['demo_cart'][$i][2] + ($row['item_price'] * $_POST['number']), $_SESSION['demo_cart'][$i][3] + $_POST['number']];
                    } else {
                        $_SESSION['demo_cart'][$i] = [$row['item_name'], $row['id'], $_SESSION['demo_cart'][$i][2] + $row['item_price'], $_SESSION['demo_cart'][$i][3] + 1];
                    }
                }
            }
        }
    }
    if ($newItem) {
        if (isset($_POST['number'])) {
            $_SESSION['demo_cart'][$count_items] = [$row['item_name'], $row['id'], ($row['item_price'] * $_POST['number']), $_POST['number']];
        } else {
            $_SESSION['demo_cart'][$count_items] = [$row['item_name'], $row['id'], $row['item_price'], 1];
        }
    }
}    
} catch (Exception $exc) {
    echo $exc->getTraceAsString();
}

