<?php

require_once __DIR__ . '/photo/autoload.php';

$collection = (new MongoDB\Student)->mydb->students;
$collection->drop();

$collection->insertOne(['name' => 'Bob', 'state' => 'ny']);
$collection->insertOne(['name' => 'Alice', 'state' => 'ny']);
$deleteResult = $collection->deleteMany(['state' => 'ny']);

printf("Deleted %d document(s)\n", $deleteResult->getDeletedCount());

header("Location:index.php");
?>