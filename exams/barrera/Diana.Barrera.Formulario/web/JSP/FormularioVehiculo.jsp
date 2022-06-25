<%-- 
    Document   : FormularioVehiculo
    Created on : Jun 24, 2022, 7:45:08 PM
    Author     : diana
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title> Vehicle Registration Form </title>
</head>
<body>
  <section class="form-register">
    <h4>Vehicle Registration Form</h4>
    <input class="controls" type="text" name="mark" id="mark" placeholder="Ingrese marca del vehiculo">
    <input class="controls" type="text" name="model" id="model" placeholder="Ingrese modelo del vehiculo">
    <input class="controls" type="text" name="color" id="color" placeholder="Ingrese color del vehiculo">
    <input class="controls" type="text" name="price" id="price" placeholder="Ingrese precio del vehiculo">
    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
    <input class="botons" type="submit" value="Registrar">
    <p><a href="#">¿Ya tengo Cuenta?</a></p>
  </section>

</body>
</html>
