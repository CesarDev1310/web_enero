
window.onload = function(){
    //Todo lo que este acá se va a ejecutar cuando la 
    //pagina este cargada

    mostrarMensaje();
}


//Variables
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
    alert("Hola "+valor);
}