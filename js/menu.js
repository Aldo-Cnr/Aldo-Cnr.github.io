

let menuVisbible = false;
//  Funcion que muestra u oculta el menu
function mostrarOcultarMenu(){
    if(menuVisbible){
        document.getElementById("nav").classList = "";
        menuVisbible = false
    } else{
        document.getElementById("nav").classList = "responsive";
        menuVisbible= true;
    }
}

// Oculytar el menu una vez que se selecciona algun opcion
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisbible = false;
}


// Animacion de las habilidades
// function efectHabil(){
//     var skills = document.getElementById("skills");
//     var distancia = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia >= 300){
//         let habilidades = document.getElementsByClassName("progreso");
//         habilidades[0].classList.add("html");
//     }
// }
//  Detectar el scroll
// window.onscroll = function(){
//     efectHabil();
// }