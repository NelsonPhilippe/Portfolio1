const navbar = document.getElementById('nav');


$(window).resize(() =>{
    
    let width = window.innerWidth;


    if(width <= 900){
        //close
        navbar.style.left = "-20%";
    }else {

        //open
        navbar.style.left = "0%";

    }
})


