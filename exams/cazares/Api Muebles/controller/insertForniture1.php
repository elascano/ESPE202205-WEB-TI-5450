<?php
require_once "../db/db.php";
$name = $_POST['name'];
$model    = $_POST['model'];
$idForniture = $_POST['FornitureID'];
$color = $_POST['color'];
$price = $_POST['price'];

$obj = array (
'name' => $name,
'model' => $model,
'color' => $color,
'price'=> $price,
'idForniture'=> $idForniture
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('BdCazares.Forniture', $insert);

if ($result->getInsertedCount() == 1) {
    echo 'registrado con exito';
	
} else {
    echo 'error de registro';
    
}