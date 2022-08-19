function validateUser() {
    var usuario =  $('#username').val();
    var password = $('#password').val();
    var url = "http://localhost/exam_1/functions/validateUser.php"

    $.ajax({
        type: 'POST',
        url : url,
        data : {'user': usuario, 'password':password},
        success: function(response)
        {
            console.log(response)
            if (response == 1) {
                alert("Bienvenido " + usuario);
                window.location = "http://localhost/exam_1/views/mainForm.html"; 
            }else{
                alert("El usuario " + usuario + " no existe, o la contraseña es incorrecta");

            }
           

        }



    })


}


function entryDevice() {
    var type =  $('#devices').val();
    var brand = $('#brand').val();
    var serial = $('#serial').val();
    var condition = $('#condition').val();
    var price = $('#price').val();
    var url = "http://localhost/exam_1/functions/entryDevice.php"

    $.ajax({
        type: 'POST',
        url : url,
        data : {'type': type, 'brand':brand, 'serial':serial, 'condition':condition, 'price':price},
        success: function(response)
        {
            console.log(response)
            if (response == 1) {
                alert("Device " + " " + type +" "+ brand + " inserted succesful");
                window.location = "http://localhost/exam_1/views/mainForm.html"; 
            }else{
                alert("PLEASE CHECK YOUR DATA");

            }
           

        }



    })


}
