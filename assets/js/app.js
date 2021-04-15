let header = document.querySelector('.header');
let intro = document.querySelector('.intro');
let introH = intro.offsetHeight;
let scrollOffset = window.scrollY;

// Fixed Header
checkScroll();

window.addEventListener('scroll', function() {
    scrollOffset = window.scrollY;    
    checkScroll();
});

function checkScroll() {
    
    if (scrollOffset >= introH) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

// Smooth scroll

let anchors = document.querySelectorAll('.scroll');
let nav = document.querySelector('#nav');

nav.onclick = function(active) {
    for(let i = 0; i < nav.children.length; i++) {
        nav.children[i].classList.remove('active');
    }
    active.target.classList.add('active');
}


for (let anchor of anchors) {
    anchor.addEventListener("click", function(smoothScroll) {
        smoothScroll.preventDefault();
        let elementId = anchor.getAttribute('href')
        document.querySelector('' + elementId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// Menu nav Toggle

let burger = document.querySelector("#navToggle");

burger.addEventListener("click", function(event){
        event.preventDefault();
        nav.classList.toggle("active");
        burger.classList.toggle("active");
 });

// Accordion

let accordion = document.getElementsByClassName('accordion__item');

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle('active');
    });   
}