const portfolio = document.getElementById('portfolio-c')
const navbar = document.getElementById('nav');
// const canvas = document.querySelector('canvas')


$(window).resize(() =>{
    let width = window.innerWidth;

    if(width <= 1100){
        //close
    
        navbar.style.left = "-40vw";
        canvas.style.width = "100vw"
        canvas.style.overflow = "hidden"
        portfolio.style.width = "100vw"
        portfolio.style.left = "0"
    }else {
    
        //open
        navbar.style.left = "0%";
        canvas.style.width = "100%"
        canvas.style.overflow = "hidden"
        portfolio.style.width = "80vw"
        portfolio.style.left = "20vw"
    
    }
})
