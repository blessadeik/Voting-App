const body = document.body
// button animation on landing page
const castBtn = document.querySelector(".btn-cast")

castBtn.addEventListener("click", moveRight)

function moveRight () {
    castBtn.style.marginLeft = '300px';
    castBtn.style.opacity = "0";
    
}

//menu open and close

const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('nav')
const header = document.querySelector('header')

menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active')
        nav.classList.toggle('active')
        header.classList.toggle('active')
})