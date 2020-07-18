//Obtener los elementos de la clase Close

let links = document.querySelectorAll(".close");

// Recorridos

links.forEach(function(link){

    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

    //Sacarle la animacion que ya tiene
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("aniamted");
    
    //Agregar clases para animar la salida fadeOutUp
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
        location.href = "../index.html";
    },700);
    

    return false;
    })
})

