<%-- 
    Document   : index
    Created on : 24-jun-2022, 19:23:44
    Author     : Javier Snz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, inicial-scale=1.0">
        <title>Registro Tráfico</title>
        <link rel="stylesheet" type="text/css" href="css/allPageStyle.css">
        <link rel="stylesheet" type="text/css" href="css/indexStyle.css">
    </head>
    <body>
        <section>
            <div class="container">
                <div class="traffic">
                    <div class="formBx">
                        <form>
                            <h2>AGREGAR DETALLES TRÁFICO</h2>
                            <input type="text" name="crossingTime" placeholder="Tiempo de Cruce">
                            <input type="text" name="vehicleType" placeholder="Tipo de vehículo">
                            <input type="text" name="typeOfTracks" placeholder="Tipo de carretera">
                            <input type="text" name="numberOfVehicles" placeholder="Total carros">
                            
                            <button type="submit" value="addTraffic" name="accion">
                                Agregar Tráfico
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
