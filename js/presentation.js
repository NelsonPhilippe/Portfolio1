const about = document.getElementById('about')
const container = document.getElementById('container-p')
const img = document.getElementById('img-illu');
const li_back_qg = document.getElementById('li-back-qg')
const ul_pre = document.getElementById('ul-pre');
const li_back_stage = document.getElementById('li-back-stage');
var canvas = document.querySelector('canvas')


$(window).on('load', () => {
    about.style.top = "10vh"
    container.style.marginLeft = "10vh"
    img.style.opacity = 1

    li_back_qg.style.marginLeft = "0vw";
    li_back_stage.style.marginLeft = "0vw";
})

$(window).on('scroll', () => {
    // if(isInViewport(ul_pre)){
    //    li_back_qg.style.marginLeft = "0vw";
    //    li_back_stage.style.marginLeft = "0vw";

    //    console.log('test');
    // }else {
    //     li_back_qg.style.marginLeft = "-150vw";
    //     li_back_stage.style.marginLeft = "-150vw";
    // }

    // if(isInViewport(li_back_qg)){
    //     li_back_qg.style.marginLeft = "0vw";
    // }else {
    //     li_back_qg.style.marginLeft = "-150vw";

    // }


    // if(isInViewport(li_back_stage)){
    //     li_back_stage.style.marginLeft = "0vw";
    // }else {
    //     li_back_stage.style.marginLeft = "-150vw";

    // }

})

$(window).resize(() =>{
    canvas.style.width = "100%";
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