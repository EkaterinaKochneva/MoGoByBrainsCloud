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