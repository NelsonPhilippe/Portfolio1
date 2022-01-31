const navbar = document.getElementById('nav');
var canvas = document.querySelector('canvas')


$(window).resize(() =>{
    
    let width = window.innerWidth;

    if(width >= 2000){
        navbar.style.width = "15%";
    }else {
        navbar.style.width = "20%"
    }

    if(width <= 1100){
        //close
        navbar.style.left = "-20%";
        canvas.style.left = "0"
        canvas.style.width = "100%"
        canvas.style.overflow = "hidden"
    }else {

        //open
        navbar.style.left = "0%";
        canvas.style.left = "20%"
        canvas.style.width = "80%"

        canvas.style.overflow = "hidden"

    }


})



