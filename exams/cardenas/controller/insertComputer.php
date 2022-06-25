<?php
require_once "../db/db.php";
$name = $_POST['name'];
$model    = $_POST['model'];
$computerID = $_POST['computerID'];
$price = $_POST['price'];

$obj = array (
'name' => $name,
'model' => $model,
'stock'=> $stock,
'idProduct'=> $idProduct
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('exam.products', $insert);

if ($result->getInsertedCount() == 1) {
    echo 'registrado';
	
} else {
    echo 'error';
    
}