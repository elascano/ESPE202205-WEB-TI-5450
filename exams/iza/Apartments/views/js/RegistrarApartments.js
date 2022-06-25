function registrarUsuario(){
    var id =$('#txtid').val();
    var descripcion=$('#txtdescripcion').val();
    var numero=$('#txtnumero').val();
    var localizacion =$('#txtlocalizacion ').val();
    
    var url = "http://localhost/Apartments/controller/insertarApartaments.php"

$.ajax({
    type:"POST",
    url: url,
    data: {'id':id,'descripcion':descripcion,'numero':numero,'localizacion':localizacion},
    success: function (response)
    {
        if(response=='registrado'){
            $('anymodal').modal('show');  
            console.log(response) 
            alert('registrado con exito');       
        }else{
            console.log(response)
             alert('Error de registro');
    }
    }
    
})
}