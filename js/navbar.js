const navbar = document.getElementById('nav');
const home = document.getElementById('home-c');
var canvas = document.querySelector('canvas');


$(window).resize(() =>{
    
    let width = window.innerWidth;

    // if(width >= 2000){
    //     navbar.style.width = "15%";
    // }else {
    //     navbar.style.width = "20%"
    // }

    if(width <= 1100){
        //close
    
        navbar.style.left = "-20vw";
        canvas.style.width = "100vw"
        canvas.style.overflow = "hidden"
        home.style.width = "100vw"
        home.style.left = "0"
    }else {

        //open
        navbar.style.left = "0%";
        canvas.style.width = "100%"
        canvas.style.overflow = "hidden"
        home.style.width = "80vw"
        home.style.left = "20vw"


    }


})



