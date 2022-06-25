<?php
require_once $_SERVER['DOCUMENT_ROOT']."/unit1/Apartments/db/db.php";
$id = $_POST['id'];
$descripcion = $_POST['descripcion'];
$numero = $_POST['numero'];
$localizacion = $_POST['localizacion'];

$obj=array(
    'id'=>$id,
    'descripcion'=>$descripcion,
    'numero'=>$numero,
    'localizacion'=>$localizacion,
);
$insert=new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result=$manager->executeBulkWrite('Apartments.Apartments',$insert);

if($result->getinsertedcount()==1){
    echo'apartamento registrado';
    }else{
    echo'error de Registro';
}