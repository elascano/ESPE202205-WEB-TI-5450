<html>
<head>
    <title>students</title>
    <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
<h1>Añadir usuarios a la base de datos</h1>
<?php
require 'adduser.php';
?>

<p>
    <?php
    require_once("connect_data.php");

    if ($users->count()>0)
    {
        $datos = $users->find();
        ?>
        <table border=1>
        <?php
        foreach ($datos as $dato) {
?>      <tr>
                        <td><p><label>ID: </label><?php echo $dato["_id"]; ?></p></td>
                        <td><p><label>estudiante: </label><?php echo $dato["student"]; ?></p></td>
                        <td><p><label>año: </label><?php echo $dato["year"]; ?></p></td>
                        <td><p><label>edad: </label><?php echo $dato["age"]; ?></p></td>
                        <td><a class="edit" href="edituserprueba.php?id=<?php echo $dato["_id"];?>">Editar</a></td>
                        <td><a class="extbt" href="deluser.php?id=<?php echo $dato["_id"];?>">Eliminar</a></td>
        </tr>
                 <?php
         }//foreach
                 ?>
                 </table>
                 <?php
    }else{
                ?>
                        <h4></i>Sin registros en la Base de Datos</h4>
                <?php 
    } ?>

</p>
</body>

</html>