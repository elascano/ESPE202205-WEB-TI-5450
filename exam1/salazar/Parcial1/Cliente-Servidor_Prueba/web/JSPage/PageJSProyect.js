
var Vector = new Array();

function init(){
    console.log("Iniciando Aplicación");
}

function BorrarDatos(){
    var NombreArb = document.getElementById("NombreArbol");
    nombre.value = "";
    var TipoArb = document.getElementById("TipoArbol");
    apellido.value = "";
}

function GuardarDatos(){
    var nombre = document.getElementById("NombreArbol");
    var Tipo = document.getElementById("TipoArbol");
}

function Arboles (NombreArb, TipoArb){
    this.nombre = nombrearb;
    this.tipo = tipoarb;
}

function VerDatos(){
    var tabla = document.getElementById("TablaMuestraDatos");
    if(tabla){
        while(tabla.rows.length > 0){
            tabla.deleteRow(0);
        }
        for(var Initfor = 0; Initfor < Vector.length; Initfor++){
            var fila = tabla.insertRow(-1);
            var celda = fila.insertCell(-1);
            celda.innerText = Vector[Initfor].nombre;
            celda = fila.insertCell(-1);
            celda.innerText = Vector[Initfor].tipoArb;
        }
    }
    BorrarDatos();
}

function ComprobacionCasillas(nombre, apellido, cedula, telefono){
    if(nombre.value === ""){
        alerta("Ingrese Nombre Arbol");
        return false;
    }
    if(apellido.value === ""){
        alerta("Ingrese Tipo Arbol");
        return false;
    }

    return true;
}
