<?php

require_once __DIR__ . '/student/autoload.php';

$ids= $_POST["_id"];
$estudiante= $_POST["student"];
$año= $_POST["year"];
$edad= $_POST["age"];

$collection = (new MongoDB\Student)->mydb->students;

$insertOneResult = $collection->insertOne([
    'id' => $ids,
    'estudiante' => $estudiante,
    'año' => $año,
    'edad' => $edad,
]);

header("Location:index.php");
//printf("Se insertó %d documento(s)\n", $insertOneResult->getInsertedCount());



var_dump($insertOneResult->getInsertedId());

?>