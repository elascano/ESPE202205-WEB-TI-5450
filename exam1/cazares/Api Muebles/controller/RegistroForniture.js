function registroForniture1 (){
    var name = $('#txtName').val();
    var model    = $('#txtModel').val();
    var color = $('#txtColor').val();
    var price = $('#txtPrice').val();
    var url = "http://localhost/ESPE202205-WEB-TI-5450/exams/controller/insertarForniture1.php"

    $.ajax({
        type: 'POST',
        url : url,
        data : {'name':Name,'model':Model,'color':color,'price':price},
        success : function (response)
        {
         if (response == 'registrado') {
            $('#myModal').modal('show');
         }else{
            alert(error);

         }


        }



    })

}