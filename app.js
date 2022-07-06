const body = document.body
// button animation on landing page
const castBtn = document.querySelector(".btn-cast")

castBtn.addEventListener("click", moveRight)

function moveRight () {
    castBtn.style.marginLeft = '300px';
    castBtn.style.opacity = "0";
    
}

