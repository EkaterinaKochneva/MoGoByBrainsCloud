let header = document.querySelector('.header');
let intro = document.querySelector('.intro');
let introH = intro.offsetHeight;
let scrollOffset = window.scrollY;

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

