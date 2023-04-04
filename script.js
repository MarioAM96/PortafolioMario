let menuVisible = false;
//FUNCION PARA MOSTRAR Y OCULTAR EL MENU
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}
 

//FUNCION PARA LAS ANIMACIONES DE SKILLS

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("laravel");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoenequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("responsabilidad");
        habilidades[9].classList.add("dedicacion");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}