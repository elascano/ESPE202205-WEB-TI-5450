function registrar(){
    var id =$('#txtid').val();
    var descripcion=$('#txtdescripcion').val();
    var numero=$('#txtnumero').val();
    var localizacion =$('#txtlocalizacion ').val();
    
    var url = "/ESPE202205-WEB-TI-5450/exams/iza/unit1/Apartments/controller/insertarApartaments.php"

$.ajax({
    type:"POST",
    url: url,
    data: {'id':id,'descripcion':descripcion,'numero':numero,'localizacion':localizacion},
    success: function (response)
    {
        alert(response);
        if(response=='registrado'){
            $('anymodal').modal('show');          
        }else{
        alert('Error en el Registro');
    }
    }
    
})
}