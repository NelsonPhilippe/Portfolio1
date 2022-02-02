const about = document.getElementById('about')
const container = document.getElementById('container-p')
const img = document.getElementById('img-illu');
const li_back_qg = document.getElementById('li-back-qg')
const ul_pre = document.getElementById('ul-pre');
const li_back_stage = document.getElementById('li-back-stage');


$(window).on('load', () => {
    about.style.top = "10vh"
    container.style.marginLeft = "10vh"
    img.style.opacity = 1

    li_back_qg.style.marginLeft = "0vw";
    li_back_stage.style.marginLeft = "0vw";
})



const navbar = document.getElementById('nav');
const presentation = document.getElementById('presentation-c');
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
    
        navbar.style.left = "-40vw";
        canvas.style.width = "100vw"
        canvas.style.overflow = "hidden"
        presentation.style.width = "100vw"
        presentation.style.left = "0"
    }else {

        //open
        navbar.style.left = "0%";
        canvas.style.width = "100%"
        canvas.style.overflow = "hidden"
        presentation.style.width = "80vw"
        presentation.style.left = "20vw"

    }


})






function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}