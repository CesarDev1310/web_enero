
/*window.onload = function(){
    //Todo lo que este acá se va a ejecutar cuando la 
    //pagina este cargada

    $("#idEnviar").attr("disabled", true);
    mostrarMensaje();

    $("#idCheckbox").on("change", function(){   
        let checked = v_confirmacion = $(this).prop("checked");
        if (checked) {
            $("#idEnviar").removeAttr("disabled", true)
        }else{
            $("#idEnviar").attr("disabled", true)
        }
    });

    $("#idEnviar").on("click", function(){
        enviarDatos();
    });
}
*/

$(document).ready( function(){
    $("#idEnviar").attr("disabled", true);
    mostrarMensaje();

    $("#idCheckbox").on("change", function(){   
        let checked = v_confirmacion = $(this).prop("checked");
        if (checked) {
            $("#idEnviar").removeAttr("disabled", true)
        }else{
            $("#idEnviar").attr("disabled", true)
        }
    });

    $("#idEnviar").on("click", function(){
        enviarDatos();
    });
});

function enviarDatos(){
    v_nombre = $("#idNombre").val();
    v_correo = $("#idEmail").val();
    v_contrasenia = $("#idPassword").val();

    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let resultado = regex.test(v_correo);

    if (v_confirmacion && 
        v_nombre != null && v_nombre.trim().length > 0 &&
        v_correo != null && v_correo.trim().length > 0 && resultado &&
        v_contrasenia != null && v_contrasenia.trim().length > 0
    ) {
        $("#idNavbar").text(v_nombre);
    }else{
        $("#idNavbar").text("Navbar");
        alert("Ingrese datos válidos");
    }

}


//Variables
let v_confirmacion = false;
let v_nombre = null;
let v_correo = null;
let v_contrasenia = null;


const nombre = "César";
let apellido = "Mantilla";
var direccion = "Jr. Direccion 123";
var edad = 30;

let alumno1 = {
    nombre:"César",
    apellido: "Mantilla",
    edad: 20,
    direccion: "Jr. Direccion 123"
}
let alumno2 = {
    nombre:"Vicente",
    apellido: "Villena",
    edad: 19,
    direccion: "Jr. Direccion 456"
}

let arregloAlumno = [alumno1, alumno2];
let arregloNumeros = [1, 2,3 , 4];
let arregloX = [1, 2,3 , 4, "Hola", alumno1];

function mostrarMensaje(valor){
    console.log("Bienvenidos !!")
}

