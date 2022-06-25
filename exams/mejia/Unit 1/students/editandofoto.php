<?php session_start();
   require 'connect_data.php';
   $users = (new MongoDB\Student)->mydb->students; 

   if (isset($_GET['id'])) {
      $users =findOne(['_id' => new MongoDB\BSON\ObjectID($_GET['id'])]);
   }
   if(isset($_POST['submit'])){
      $users->updateOne(
          ['_id' => new MongoDB\BSON\ObjectID()],
          ['$set' => ['id' => $_POST['nid'], 'estudiante' => $_POST['nstudent']]]
      );
      $_SESSION['success'] = "Información editada correctamente";
      header("Location: index.php");
   }
?>

<!DOCTYPE html>
<html>
   <head>
      <title>Edicion</title>
   </head>
   <body>
         <br>
         <h1>Editar información</h1>
         <a href="index.php" class="btn btn-primary">Ir atras</a>
         <form method="POST">
               <p><strong>id</strong>
               <input type="text" name="nid"></p>
               <p><strong>Nuev0 Estudiante</strong>
               <input type="text" name="nstudent"><p>
               <br>
               <button type="submit" name="submit" class="btn btn-success">Enviar</button>
            </div>
         </form>
      </div>
   </body>
</html>