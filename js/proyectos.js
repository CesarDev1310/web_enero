
$(document).ready( function(){
    generarProyectos();
});

let listaProyectos = [
    {
        idProyecto: 1,
        titulo:"Mi proyecto inicial",
        descripcion: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/01/2025",
        tecnologias: ["html", "JavaScript", "Azure", "Sql Server"],
        etiquetas: ["Juegos", "online"],
        imagenes:[
            "../img/18084.jpg",
            "../img/18084.jpg",
            "../img/18084.jpg",
            "../img/18084.jpg"
        ],        
    },
    {
        idProyecto: 2,
        titulo:"Mi segund Proyecto",
        descripcion: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/12/2024",
        tecnologias: ["html", "JavaScript", "Azure", "Sql Server"],
        etiquetas: ["Ecommerce", "Tienda"],
        imagenes:[
            "../img/18084.jpg",
            "../img/18084.jpg"
        ],        
    },
    {
        idProyecto: 3,
        titulo:"Mi tercer Proyecto",
        descripcion: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/12/2024",
        tecnologias: ["html", "JavaScript", "Azure", "Sql Server"],
        etiquetas: ["Ecommerce", "Tienda"],
        imagenes:[
            "../img/18084.jpg",
            "../img/18084.jpg"
        ],        
    },
    {
        idProyecto: 4,
        titulo:"Mi cuarto Proyecto",
        descripcion: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/12/2024",
        tecnologias: ["html", "JavaScript", "Azure", "Sql Server"],
        etiquetas: ["Ecommerce", "Tienda"],
        imagenes:[
            "../img/18084.jpg",
            "../img/18084.jpg"
        ],        
    },
    {
        idProyecto: 5,
        titulo:"Mi quinto Proyecto",
        descripcion: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fecha: "01/10/2024",
        tecnologias: ["html", "JavaScript", "Azure", "Mongo"],
        etiquetas: ["Ecommerce", "Tienda", "Repuestos"],
        imagenes:[
            "../img/18084.jpg",
            "../img/18084.jpg"
        ],        
    }
];

let proyectoTemporal = listaProyectos.filter(p => p.titulo.includes("quinto"));

function generarProyectos(){

    $(".alingItem").empty();

    for (let i = 0; i < proyectoTemporalproyectoTemporal.length; i++) {
        const proyecto = listaProyectos[i];

        let item = '<div class="card mb-3" style="max-width: 440px;">'+
                            '<div class="row g-0">'+
                            '<div class="col-md-4">'+
                                '<img src="'+proyecto.imagenes[0]+'" class="img-fluid rounded-start" alt="'+proyecto.titulo+'">'+
                            '</div>'+
                            '<div class="col-md-8">'+
                                '<div class="card-body">'+
                                '<h5 class="card-title">'+proyecto.titulo+'</h5>'+
                                '<p class="card-text">'+proyecto.descripcion+'</p>'+
                                '<p class="card-text"><small class="text-body-secondary">'+proyecto.fecha+'</small></p>'+
                                '</div>'+
                            '</div>'+
                            '</div>'+
                        '</div>';
        console.log(item);                        
        
        $(".alingItem").append(item);        
    }
}