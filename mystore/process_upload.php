<?php
require 'config.php';
require 'DB.php';
session_start();
require_once 'autoload.php';
// use PhpOffice\PhpSpreadsheet\Reader\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;

try {
    if ($_FILES['file'] > 0) {
        // Where the file is going to be stored
        $target_dir = "./uploads/";
        $file = $_FILES['file']['name'];
        $temp_name = $_FILES['file']['tmp_name'];
        $path_filename_ext = $target_dir . $file;
        // Check if file already exists
        if (file_exists($path_filename_ext)) {
            echo "Sorry, file already exists.";
        } else {
            move_uploaded_file($temp_name, $path_filename_ext);
            echo "File Uploaded Successfully.";
        }
        $spreadsheet = IOFactory::load($path_filename_ext);
        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
        
        if (!($sheetData['1']['A'] === "Item Name") || 
                !($sheetData['1']['B'] === "Item Category") || !($sheetData['1']['C'] === "Item Description") || 
                !($sheetData['1']['D'] === "Item Image Source") || !($sheetData['1']['E'] === "Item Price")) {
            throw new Exception('Uploaded file is not supported, please use sample file to add items to shopping list. Click <a href="'.WEB_HOST.'./js/Operations.exlsx" target="_blank">here.</a> to download sample file.');
        }
        $conn = DB::connectDB();
        for($i = 2; $i <= count($sheetData); $i++){
            DB::insertItems($sheetData[$i]['A'],$sheetData[$i]['B'],$sheetData[$i]['C'],$sheetData[$i]['D'],$sheetData[$i]['E'],session_id(),$conn);
//            $lastItemId = DB::getLastItemId($conn)['id'];
//            DB::createItemResources($conn,$sheetData[$i]['D'],$sheetData[$i]['A'],$sheetData[$i]['E'],$lastItemId);
        }
        //DB::closeConnection($conn);
        header("Refresh:5, Url=". WEB_HOST);
    }
} catch (Exception $e) {
    die('error: ' . $e->getMessage());
}