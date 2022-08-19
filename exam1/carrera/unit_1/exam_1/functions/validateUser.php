<?php
require_once $_SERVER['DOCUMENT_ROOT']."/exam_1/db/mongo_db.php";
$usuario = $_POST['user'] ;
$password = $_POST['password'] ;
$query = new MongoDB\Driver\Query(array('userName' => $usuario,'password'=>$password));

$cursor = $manager->executeQuery('cell_store.users', $query);

$users = $cursor->toArray();
$result = count($users);

if ($result != 0) {
      echo 1;
}else{
    echo 0;
};
?>