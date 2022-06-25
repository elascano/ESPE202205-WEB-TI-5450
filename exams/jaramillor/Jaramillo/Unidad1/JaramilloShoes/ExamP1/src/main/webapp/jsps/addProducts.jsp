
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
            />
        <title>AGREGAR PRODUCTOS</title>
    </head>
    <body>
        <div class="container mt-4">
            <h1 class="text-center">Agregar Producto</h1>
            <form action="Controlador">
                <div class="row mt-4">
                    <div class="col">
                        <label>Nombre: </label>
                        <input type="text" name="name" class="form-control" />
                    </div>
                    <div class="col">
                        <label>Tipo: </label>
                        <input type="text" name="type" class="form-control" />
                    </div>
                    <div class="col">
                        <label>Marca: </label>
                        <input type="text" name="brand" class="form-control" />
                    </div>
                    <div class="col">
                        <label>Talla: </label>
                        <input type="Number" name="tal" class="form-control" />
                    </div>
                    <div class="col">
                        <label>Color: </label>
                        <input type="text" name="color" class="form-control" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <p class="text-center">
                            <button
                                type="submit"
                                value="Agregar"
                                name="accion"
                                class="btn btn-success"
                                >
                                Agregar
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>

