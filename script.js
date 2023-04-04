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