<?php
if (isset($_POST['name'])) {
    try {
        $message = "Good day"
                . "\n\nEmail send from tthale: ".$_POST['email']
                ."\nSent from ".$_POST['FirstName']." ".$_POST['lastName']
                ."\nKing Regards";
        $result = mail('tthale34@gmail.com', "Mail from:".$_POST['email'], $message);
        if ($result) {
            echo 'Mail sent succesfully';
        }  else {
            echo 'Nothing';
        }
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }

    
}
?>