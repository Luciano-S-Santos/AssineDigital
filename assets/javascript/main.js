//***********************Heder***********************
//-nav
var nav = document.getElementById('navegation');
var t = document.querySelector('li');
var teste = t.querySelectorAll('.nav-option')

window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>100){

        nav.style.background = "White";
        nav.style.transition = ".3s";
        teste.style.background = "black";

    }
    else{
        nav.style.background = "transparent";
    }
});

//-nav
