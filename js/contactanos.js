
$("#idEnviar").on('click', function(){

    //Validar que lo campos esten completos
    $("#idModal").modal('show');
});

$("#idBuscarC").on("click", function(){
    window.location.href = "./proyectos.html?valorBusqueda="+$("#idValorC").val();    
});

function enviardatos(){
    console.log("Cerrando modal");
    //Validar que lo campos esten completos
    $("#idModal").modal('hide');
    window.location.href = "../index.html";
}