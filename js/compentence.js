const navbar = document.getElementById('nav');
const competence = document.getElementById('comp');
var canvas = document.querySelector('canvas');

const java = document.getElementById('java');
const htmlcss = document.getElementById('htmlcss');
const javascript = document.getElementById('javascript');
const linux = document.getElementById('linux');
const express = document.getElementById('express');
const vue = document.getElementById('vue');
const git = document.getElementById('git');
const docker = document.getElementById('docker');


$(window).on('load', () => {
    resize(java, "90%")
    resize(htmlcss, "80%")
    resize(javascript, "70%")
    resize(linux, "60%")
    resize(express, "80%")
    resize(vue, "50%")
    resize(git, "100%")
    resize(docker, "50%")

})



$(window).resize(() =>{
    
    let width = window.innerWidth;

    // if(width >= 2000){
    //     navbar.style.width = "15%";
    // }else {
    //     navbar.style.width = "20%"
    // }

    resize(java, "90%")
    resize(htmlcss, "80%")
    resize(javascript, "70%")
    resize(linux, "60%")
    resize(express, "80%")
    resize(vue, "50%")
    resize(git, "100%")
    resize(docker, "50%")

    if(width <= 1100){
        //close
    
        navbar.style.left = "-40vw";
        canvas.style.width = "100vw"
        canvas.style.overflow = "hidden"
        competence.style.width = "100vw"
        competence.style.left = "0"
    }else {

        //open
        navbar.style.left = "0%";
        canvas.style.width = "100%"
        canvas.style.overflow = "hidden"
        competence.style.width = "80vw"
        competence.style.left = "20vw"

    }


})

function resize(elem, size){
    elem.style.width = size;
}

