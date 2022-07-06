
// active button checked if the instructions have been read

const agreeCheck = document.querySelector("#agree")
const agreeBtn = document.querySelector("#read_confirm")
const mainContent = document.querySelector(".main_content").children
const sideList = document.querySelector('.side-list').children

// if (agreeCheck.checked) {
//     agreeBtn.classList.add('clicked')

//     console.log('waoo')
// } else {
//     agreeBtn.classList.remove('clicked')

//     console.log('woo')
// }

agreeCheck.addEventListener('click', addBtnClass)

function addBtnClass() {

    if (agreeCheck.checked) {
            agreeBtn.classList.add('clicked')
            agreeBtn.addEventListener('click', nextPage)

        } else {
            agreeBtn.classList.remove('clicked')
            agreeBtn.removeEventListener('click', nextPage)
        }
}

let inPage = 0;

function nextPage () {
    sideList[inPage].classList.remove('active')
    mainContent[inPage].classList.remove('display')

    inPage++

    
    sideList[inPage].classList.add('active')
    mainContent[inPage].classList.add('display')
}