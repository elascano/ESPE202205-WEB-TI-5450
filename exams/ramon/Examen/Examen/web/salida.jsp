   
<%@page contentType="text/html" pageEncoding="UTF-8"%> 
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ok</title>
    </head>
    <body>
        <h2>Gracias por registrar sus datos</h2>
        <p>
            <jsp:getProperty name="DatosEncuesta" property="nombreCompleto" />
            registró sus datos en el formulario:
            <jsp:useBean id="Datos" scope="request" class="ec.edu.modelo.DatosEncuesta" />
        </p>
        <ul>

            
            <%
                String file_name=Datos.getFoto();
                if (file_name !=null){
                    %><br>
                    <img src="Resources/<%=file_name%>">
                <%                   
                }
                %> 
                
        </ul>
    </body>
</html>
