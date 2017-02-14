
$("#inicioXML").click(function(){
    $.ajax({
        type : "POST",
        url : "aciertaNumeroXML.php",
        dataType : "json",
        data: { inicio: "si"},
        success : function(respJSON) {
            var nombre =respJSON.inicio;
            console.log(nombre);
        }
    });
});