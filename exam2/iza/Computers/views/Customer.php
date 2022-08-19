<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>views Customers</title>
        <link rel="stylesheet" href="css/estilosLogin.css" type="text/css" media="all">
    </head>
</html>
<h1><center>Views Customers</center</h1><br><br>
<?php 
   
    require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-WEB-TI-5450/examn2/iza/Computers/db/db.php";
    $filter = [];
    $options = [];
    $query = new MongoDB\Driver\Query($filter, $options);
    $cursor = $manager->executeQuery('computerstoredb.Customer', $query);
    
    
    echo '<div class="col-md-12">';
    echo '<div class="row" style="padding-left: 10rem;padding-right: 10rem;">';
    echo '<table cellspacing="10" cellpadding="10" border>';
    echo '<tr>';
    echo '<th style="color:black;">id</th>';
    echo '<th style="color:black;">name</th>';
    echo '<th style="color:black;">age</th>';
    echo '<th style="color:black;">moneySpent</th>';
    echo '</tr>';

    foreach ($cursor as $document) {
        $document = json_decode(json_encode($document),true);
            
        echo '<tr>';
        echo '<td>'.$document['id'].'</td>';
        echo '<td>'.$document['name'].'</td>';
        echo '<td>'.$document['age'].'</td>';
        echo '<td>'.$document['moneySpent'].'</td>';

        echo '</tr>';
    }
    echo '</div>';
    echo '</div>';
   
?>
            <?php      
            ?>
        </div>
    </div>
</body>
</html>