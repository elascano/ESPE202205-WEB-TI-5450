  
<%@page contentType="text/html" pageEncoding="UTF-8"%> 
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Datos Cantantes</title> 
    </head>
    <body>
        <h1>Formulario</h1>
        <p>Registrar los datos del cantante</p>
        <form action="ServletController" method="post">
            <table border="0">
                <tbody>
                    <tr>
                        <td>Nombre Completo</td>
                        <td><input type="text" name="nombreCompleto" value="" /></td>
                    </tr>
                    <tr>
                        <td>Edad</td>
                        <td><input type="text" name="edad" value="" /></td>
                    </tr>
                    <tr>
                        <td><input type="file" name="Foto" value="" width="150"/></td>
                        <td><input type="submit" value="Enviar" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </body>
</html>
