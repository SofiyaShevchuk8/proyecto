$(function () { //Cuando está listo el documento

    setTimeout(function () {
        $('.preload').hide('fast'); //ocultar el loader
        $('#foo').removeClass('cover'); //quitar el cover
    }, 4000); //Después de 5s ocultar el preload

});

let mano = gsap.timeline({


});

mano.from("#mano-relative", {

    duration: 1,
    opacity: 0,
    delay: 4
});

mano.to("#mano-relative", {

    duration: 0.4,
    //xPercent: -30.4,
    ease: "none",
    opacity: 1,
    repeat: 100,
    yoyo: true,
    //scale: 1.2
    rotate: 20,
    transformOrigin: "right top"

});

mano.to("#mano-relative", {

    duration: 0.3,
    opacity: 0
}, "+=1");




let pajaro = gsap.timeline({


});

pajaro.from("#pajaro", {

    duration: 1,
    opacity: 1,
    rotate: 20,
    yPercent: 2,
    delay: 1
});

pajaro.to("#pajaro", {

    duration: 2,
    //xPercent: -30.4,
    yPercent: 20,
    ease: "bounce",
    opacity: 1,
    restart: true,
    yoyo: true,
    repeat: 1,
    //scale: 1.2
    rotate: 75,
    transformOrigin: " bottom"


});



$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 900);
    });
});



//pruebas scroll




//let tlflecha = gsap.timeline({
//yoyo: true,
//repeat: -2

//});


//tlflecha.to("#flecha", {

//y: 40,
//duration: 1,
//delay: 0.2
//});



var listItems = document.querySelectorAll("#flecha");
var navItems = gsap.timeline({
        paused: true,
        id: "flecha"
    })
    .to(listItems, {
        y: 680,
        duration: 2,

        //delay: 0.2

    });


var navToggle = document.querySelector('.caja-flecha');
document.addEventListener('click', function (event) {
    navItems.play();
}, false);



var blancanieves = document.getElementById("blancanieves");
var cenicienta = document.getElementById("cenicienta");
var sirenita = document.getElementById("sirenita");


window.addEventListener('scroll', function () {


    var value = window.scrollY;

    blancanieves.style.top = value * 0.2 + 'px';
    cenicienta.style.top = value * 0.2 + 'px';
    //sirenita.style.top = value * 0.2 + 'px';


});



//function crearUsuario(){
//    let tlregistro = gsap.timeline({});
//    tlregistro.to("#primeraPantalla", {
//    duration: 0.5,
//    opacity: 0
//});
//    document.body.style.backgroundColor = "#ffff";
//    let tlsegundaPantalla = gsap.timeline({});
//    tlsegundaPantalla.to("#segundaPantalla", {
//        duration: 0.1,
//        y: ""
//    });
//    tlsegundaPantalla.to("#segundaPantalla", {
//        duration: 1,
//        opacity: 1, 
//   
//        
//    });
//}




function descubrir() {
    document.getElementById("primeraPantalla").style.opacity = 0;
    document.getElementById("primeraPantalla").style.zIndex = -1;

    document.getElementById("segundaPantalla").style.opacity = 1;
    document.getElementById("segundaPantalla").style.zIndex = 1;

    //document.getElementById("ventanaRegistro").style.overflowY = "hidden";

    //document.getElementById("primeraPantalla").style.overflowY = "hidden";

    window.scrollTo(0, 0);
    document.querySelector("body").style.overflowY = "hidden";

    let tldescubrir = gsap.timeline({});
    tldescubrir.to("#segundaPantalla", {
        duration: 1,
        y: ""
    });
}

function suscribirme() {
    document.getElementById("segundaPantalla").style.opacity = 0;
    document.getElementById("segundaPantalla").style.zIndex = -1;

    document.getElementById("terceraPantalla").style.opacity = 1;
    document.getElementById("terceraPantalla").style.zIndex = 1;



}

function suscribirmePago() {
    document.getElementById("terceraPantalla").style.opacity = 0;
    document.getElementById("terceraPantalla").style.zIndex = -1;

    document.getElementById("cuartaPantalla").style.opacity = 1;
    document.getElementById("cuartaPantalla").style.zIndex = 1;

    //document.querySelector("body").style.overflowY = "hidden";


}



function blancanievesCuento() {
    document.getElementById("primeraPantalla").style.opacity = 0;
    document.getElementById("primeraPantalla").style.zIndex = -1;

    document.getElementById("blancanievesCuento").style.opacity = 1;
    document.getElementById("blancanievesCuento").style.zIndex = 2;

    window.scrollTo(0, 0);
    document.querySelector("body").style.overflowY = "hidden";

    //Cridem a la funció d'animacions per què faci la primera animació
    animacions();

    //    window.scrollTo( 0, 0 );
    //    document.querySelector("body").style.overflowY = "hidden";

}



let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 0;
let width = sliderIndividual[0].clientWidth;
//let intervalo = 3000;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})

//setInterval(function(){
//    slides();
//},intervalo);



function slides() {
    if (contador < sliderIndividual.length - 1) {
        contador++;
        slider.style.transform = "translate(" + (-width * contador) + "px)";
        slider.style.transition = "transform .9s";

        animacions();
    }

    //        if(contador == sliderIndividual.length){
    //            setTimeout(function(){
    //                slider.style.transform = "translate(0px)";
    //                slider.style.transition = "transform 0s";
    //               contador=1;
    //            },1500)
    //        }
}


function slidesAtras() {
    if (contador > 0) {
        //Només tirem enrera si no estem a la primera pàgina
        contador--;
        slider.style.transform = "translate(" + (-width * contador) + "px)";
        slider.style.transition = "transform .9s";

        animacions();

    }


}

function animacions() {
    if (contador == 0) {
        //Animació de la primera pàgina
        let tlImg1 = gsap.timeline({});
        tlImg1.fromTo("#blancanieves", {
            y: "0"
        }, {
            duration: 1,
            y: "300"
        });
    } else if (contador == 1) {
        //Animació de la segona pàgina
        let tlImg2 = gsap.timeline({});
        tlImg2.fromTo("#img2", {
            y: "0"
        }, {
            duration: 1,
            y: "300"
        });
    } else if (contador == 2) {
        //Animació de la tercera pàgina
    } else if (contador == 3) {
        //Animació de la quarta pàgina
    } else if (contador == 4) {
        //Animació de la cinquena pàgina
    }
}
