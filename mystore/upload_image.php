<?php
require 'config.php';
require 'DB.php';
session_start();
$filename = $_FILES['file']['name'];

/* Location */
$location = "./uploads/".$filename;
$uploadOk = 1;
$imageFileType = pathinfo($location,PATHINFO_EXTENSION);

/* Valid Extensions <form action="https://sandbox.payfast.co.za/eng/process" method="POST">

<input type="hidden" name="merchant_id" value="10000100">
<input type="hidden" name="merchant_key" value="46f0cd694581a">
<input type="hidden" name="return_url" value="https://www.yoursite.com/return">
<input type="hidden" name="cancel_url" value="https://www.yoursite.com/cancel">
<input type="hidden" name="notify_url" value="https://www.yoursite.com/notify">
 * 
<input type="hidden" name="m_payment_id" value="01AB">
<input type="hidden" name="amount" value="100.00">
<input type="hidden" name="item_name" value="Test Item">
<input type="hidden" name="item_description" value="A test product">
<input type="hidden" name="custom_int1" value="2">
<input type="hidden" name="custom_str1" value="Extra order information">
*/
$valid_extensions = array("jpg","jpeg","png");
/* Check file extension */
if( !in_array(strtolower($imageFileType),$valid_extensions) ) {
   $uploadOk = 0;
}

if($uploadOk == 0){
   echo 0;
}else{
   /* Upload file */
   if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
       try {
           $connection = DB::connectDB();
           if(isset($_POST['type'])){
               DB::changeItemResources($connection,$location,$_POST['type'],$_POST['id']);
           }  else {
               DB::chngImgSrc($connection,$location,$_POST['id']);
           }        
           
       } catch (Exception $ex) {
           echo 'Errors encountered: '.$ex->getMessage();
       }
      echo $location;
   }else{
      echo 0;
   }
}