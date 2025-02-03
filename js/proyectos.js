
$(document).ready( function(){
    proyectoTemporales = listaProyectos;    
    generarProyectos();

    obtenerParam();

    $('#idValor').on('search', function () {
        proyectoTemporales = listaProyectos;
        generarProyectos();
    });
});

let proyectoTemporales = [];

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


$("#idBuscar").on("click", function(){
    buscarProyecto($("#idValor").val());
});

function buscarProyecto(val){
    proyectoTemporales = listaProyectos;
    proyectoTemporales = proyectoTemporales.filter(x=> x.titulo.includes(val));
    generarProyectos();
}


function generarProyectos(){
    $(".alingItem").empty();    
    for (let i = 0; i < proyectoTemporales.length; i++) {
        const proyecto = proyectoTemporales[i];

        let itemsCarousel = "";        
        if (proyecto.imagenes.length > 0) {

            for (let i = 0; i < proyecto.imagenes.length; i++) {
                if (i == 0) {
                    itemsCarousel += '<div class="carousel-item active">'+
                                        '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                                    '</div>'; 
                }else{
                    itemsCarousel += '<div class="carousel-item">'+
                                '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                            '</div>';
                }
            }            
        }else{
            itemsCarousel = '<div class="carousel-item active">'+
                                '<img src="..." class="d-block w-100" alt="...">'+
                            '</div>';
        }        

        let item = '<div class="card mb-3" style="max-width: 440px;">'+
                            '<div class="row g-0">'+
                            '<div class="col-md-4">'+
                                    '<div id="cProy'+proyecto.idProyecto+'" class="carousel slide">'+
                                    '<div class="carousel-inner">'+itemsCarousel+'</div>'+
                                    '<button class="carousel-control-prev" type="button" data-bs-target="#cProy'+proyecto.idProyecto+'" data-bs-slide="prev">'+
                                    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                                    '<span class="visually-hidden">Previous</span>'+
                                    '</button>'+
                                    '<button class="carousel-control-next" type="button" data-bs-target="#cProy'+proyecto.idProyecto+'" data-bs-slide="next">'+
                                    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                                    '<span class="visually-hidden">Next</span>'+
                                    '</button>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-8">'+
                                '<div class="card-body">'+
                                    '<h5 class="card-title">'+proyecto.titulo+'</h5>'+
                                    '<p class="card-text">'+proyecto.descripcion+'</p>'+
                                    '<p class="card-text"><small class="text-body-secondary">'+proyecto.fecha+'</small></p>'+
                                    '<small class="btn btn-sm btn-info" onclick="mostrarDetalle('+proyecto.idProyecto+')" >Ver más</small>'+
                                '</div>'+
                            '</div>'+
                            '</div>'+
                        '</div>';
        $(".alingItem").append(item);        
    }
}

function obtenerParam(){
    if(window.location.search != ''){
        let param = window.location.search;
        param = param.split("=")[1];
        $("#idValor").val(param);
        buscarProyecto(param);
    }
}

function mostrarDetalle(val){
    let proyecto = listaProyectos.find(x=> x.idProyecto == val);

    $("#idTituloProy").text(proyecto.titulo);
    $("#idDescpProy").text(proyecto.descripcion);

    let itemsCarousel = "";        
        if (proyecto.imagenes.length > 0) {

            for (let i = 0; i < proyecto.imagenes.length; i++) {
                if (i == 0) {
                    itemsCarousel += '<div class="carousel-item active">'+
                                        '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                                    '</div>'; 
                }else{
                    itemsCarousel += '<div class="carousel-item">'+
                                '<img src="'+proyecto.imagenes[i]+'" class="d-block w-100" alt="...">'+
                            '</div>';
                }
            }            
        }else{
            itemsCarousel = '<div class="carousel-item active">'+
                                '<img src="..." class="d-block w-100" alt="...">'+
                            '</div>';
        } 

    let item = '<div class="col-md-12">'+
                    '<div id="cProyM'+proyecto.idProyecto+'" class="carousel slide">'+
                    '<div class="carousel-inner">'+itemsCarousel+'</div>'+
                    '<button class="carousel-control-prev" type="button" data-bs-target="#cProyM'+proyecto.idProyecto+'" data-bs-slide="prev">'+
                    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                    '<span class="visually-hidden">Previous</span>'+
                    '</button>'+
                    '<button class="carousel-control-next" type="button" data-bs-target="#cProyM'+proyecto.idProyecto+'" data-bs-slide="next">'+
                    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                    '<span class="visually-hidden">Next</span>'+
                    '</button>'+
                '</div>';
    $("#idSlider").empty();
    $("#idSlider").append(item);
    $("#idModalProy").modal('show');
}