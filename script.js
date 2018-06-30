$(document).ready(function() {
    $("#botao").click(function(){
        $("#formulario").fadeToggle(200);
    });
    $("#adicionar").click(function(){
        event.preventDefault();
        var cep = $("#cep").val();
        if(cep.length === 8 && $.isNumeric(cep)){
            $.getJSON("https://viacep.com.br/ws/"+cep+"/json/", function(json){
                if(!json["erro"] == true){
                    var uf = json["uf"];
                    var localidade = json["localidade"];
                    var logradouro = json["logradouro"];
                    var complemento = json["complemento"];
                    var bairro = json["bairro"];
                    $('<tr><td>'+cep.substring(0,5) + "-"+ cep.substring(5) + '</td><td>'+uf+'</td><td>'+localidade+'</td><td>'+logradouro+'</td><td>'+complemento+'</td><td>'+bairro+'</td></tr>').appendTo('#ceps > tbody');
                    $("#erro").css("display", "none");
                    $("#cep").val("");
                }else{
                    $("#erro").css("display", "block");
                }
            });
        }else{
            $("#erro").css("display", "block");
        }
    });

    $("tr").click(function(){
        console.log($(this));
    });
});