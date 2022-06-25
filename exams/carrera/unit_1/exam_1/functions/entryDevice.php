<?php
require_once $_SERVER['DOCUMENT_ROOT']."/exam_1/db/mongo_db.php";

$type = $_POST['type'];
$brand = $_POST['brand'];
$serial    = $_POST['serial'];
$condition = $_POST['condition'];
$price = $_POST['price'];

$obj = array (
'type' => $type,
'brand' => $brand,
'serial' => $serial,
'condition'=> $condition,
'price'=> $price,

);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('cell_store.inventory', $insert);

if ($result->getInsertedCount() == 1) {
    echo 1;
	
} else {
    echo 0;
    
}