<?php
require_once "../db/db.php";
$name = $_POST['name'];
$model    = $_POST['model'];
$idComputer = $_POST['computerID'];
$price = $_POST['price'];

$obj = array (
'name' => $name,
'model' => $model,
'price'=> $price,
'idComputer'=> $idComputer
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('bestCPU.computers', $insert);

if ($result->getInsertedCount() == 1) {
    echo 'registrado';
	
} else {
    echo 'error';
    
}