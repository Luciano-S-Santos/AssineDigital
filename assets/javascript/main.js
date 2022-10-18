//***********************Heder***********************
//-nav
var nav = document.getElementById('navegation');

window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>100){

        nav.style.background = "White";
        nav.style.transition = ".3s";
        nav.style.zIndex = "9";
    }
    else{
        nav.style.background = "transparent";
    }
});

//-nav
