<?php
	
	require_once __DIR__ . '/photo/autoload.php';
    $ = (new MongoDB\Student)->mydb->students; 

    $connection = new MongoDB\Student;
Connecting specifying host and port
connection = new MongoDB\Student('mongodb://localhost:27017');
	
?>