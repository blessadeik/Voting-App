
// moving from one slide to the next

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


// modifying the map

const mapState = document.querySelector("svg").children
const countryDisplay = document.querySelector("#country-select")
const selectCountryBtn = document.querySelector("#state_select_btn")
const clearCountry = document.getElementById('clear-country')


let stateArr = [];

for(let i = 1; i < 57; i++){
    stateArr.push(mapState[i])
}

console.log(stateArr)
let countryToDisplay;

console.log(countryToDisplay)

stateArr.forEach((state) => {
    state.addEventListener('click', () => {
        countryToDisplay = state.id

        
            countryDisplay.textContent = countryToDisplay;
            clearCountry.style.display = "inline";
            console.log(countryToDisplay)
            
            if (countryToDisplay === "" || countryToDisplay === undefined || countryToDisplay === null || countryToDisplay === false) {
                selectCountryBtn.removeEventListener('click', nextPage)
                selectCountryBtn.classList.remove('clicked')
            }  else {
                selectCountryBtn.addEventListener('click', nextPage)
                selectCountryBtn.classList.add('clicked')
            }

            //adding eventlistener to clear selected country
            clearCountry.addEventListener('click', () => {
                countryToDisplay = ""

                countryDisplay.textContent = countryToDisplay;
                clearCountry.style.display = "none";
                selectCountryBtn.classList.remove('clicked')
                selectCountryBtn.removeEventListener('click', nextPage)
            })

    })
})



// the making of the last vote-techie slides
