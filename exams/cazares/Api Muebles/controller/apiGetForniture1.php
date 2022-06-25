<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("RewriteEngine On");
header("RewriteCond %{REQUEST_FILENAME} !-f");
header("RewriteRule ^([^\.]+)$ $1.php [NC,L]");

// include database file
include_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-WEB-TI-5450/exams/cazares/db/mongodb_config.php";

$dbname = 'BdCazares';
$collection = 'Forniture1';


//DB connection
$db = new DbManager();
$conn = $db->getConnection();

//get MueblesID only
$data = json_decode(file_get_contents("php://input", true));
$id = $data->{'idForniture1'};

// read all records
$filter = [$id];
$option = [];
$read = new MongoDB\Driver\Query(array('idForniture1'=>$id)); //GetOnlyForniture1ID by "idForniture1": "number"

//fetch records
$records = $conn->executeQuery("$dbname.$collection", $read);

echo json_encode(iterator_to_array($records));

?>