
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

agreeCheck.checked = false;

let inPage = 0;

function nextPage () {
    sideList[inPage].classList.remove('active')
    mainContent[inPage].classList.remove('display')
    agreeCheck.checked = false;

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

let countryToDisplay;

let allCountry = []
let allCountryAgain = []

stateArr.forEach((state) => {
    state.addEventListener('click', () => {
        countryToDisplay = state.id
        
            countryDisplay.textContent = countryToDisplay;
            clearCountry.style.display = "inline";
            displayCountry.textContent = countryToDisplay;
            countryClear.style.display = "inline";
            
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

    allCountry.push(state.id)
    allCountryAgain.push(state.id)
})

console.log(allCountry)


// the making of the last vote-techie slides
const displayCountry = document.getElementById("countr-select")
const countryClear = document.getElementById("clear-countr")
const elonCard = document.querySelector("#elon-side")
const edwardCard = document.querySelector("#edward-side")
const voteBtn = document.querySelector('#vote_nominee_btn')

countryClear.addEventListener('click', () => {
    sideList[inPage].classList.remove('active')
    mainContent[inPage].classList.remove('display')

    inPage--

    
    sideList[inPage].classList.add('active')
    mainContent[inPage].classList.add('display')


    countryToDisplay = ""

    countryDisplay.textContent = countryToDisplay;
    clearCountry.style.display = "none";
    selectCountryBtn.classList.remove('clicked')
    selectCountryBtn.removeEventListener('click', nextPage)
})

// storing vote
let voteStore = []

let totalElon = 0
let totalEdward = 0

let totalVote = totalEdward + totalElon;

//function so store in Local Storage
function storeLS () {
    // localStorage.setItem('votedStore', voteStore)
    localStorage.setItem('elTotal', totalElon)
    localStorage.setItem('edTotal', totalEdward)
    localStorage.setItem('votedTotal', totalVote)
    localStorage.setItem('displayedCountry', countryToDisplay)
}

//assign variables from local Storage to variables
let elTotal = localStorage.getItem('elTotal')

if (elTotal) {
    totalElon = elTotal
}

let edTotal = localStorage.getItem('edTotal')

if (edTotal) {
    totalEdward = edTotal
}

let votedTotal = localStorage.getItem('votedTotal')

if (votedTotal) {
    totalVote = votedTotal
}

//class Constructor for objects
function StateObj() {
    this.ElonCount = 0
    this.EdwardCount = 0
}


// let ibadan = new StateObj()

// console.log(ibadan)

for (let i = 0; i < allCountry.length; i++){
    voteStore.push(allCountry[i] = new StateObj())
}


countryClear.addEventListener('click', () => {
    sideList[inPage].classList.remove('active')
    mainContent[inPage].classList.remove('display')

    inPage--

    
    sideList[inPage].classList.add('active')
    mainContent[inPage].classList.add('display')
    countryToDisplay = ""
    countryDisplay.textContent = countryToDisplay;
    clearCountry.style.display = "none";
    selectCountryBtn.classList.remove('clicked')
    selectCountryBtn.removeEventListener('click', nextPage)

})

//adding eventlistener to cards
elonCard.addEventListener('click', () => {
    edwardCard.classList.remove('carder')

    elonCard.classList.add('carder')
    voteBtn.removeEventListener('click', voteEdward)
    voteBtn.addEventListener('click', voteElon)
    voteBtn.classList.add('clicked')

//  if(voteStore.hasOwnProperty(countryToDisplay)) {
    
//  }

    // console.log(voteStore)
})

edwardCard.addEventListener('click', () => {
    elonCard.classList.remove('carder')

    edwardCard.classList.add('carder')
    voteBtn.classList.add('clicked')
    voteBtn.removeEventListener('click', voteElon)
    voteBtn.addEventListener('click', voteEdward)

//  if(voteStore.hasOwnProperty(countryToDisplay)) {
    
//  }
})

//vote botton for card

function voteElon(){
    let signCountry = allCountryAgain.indexOf(countryToDisplay)

    window.open('/congrate_page.html')

    ++voteStore[signCountry].ElonCount
    ++totalElon

    storeLS()
}

function voteEdward(){
    let signCountry = allCountryAgain.indexOf(countryToDisplay)

    window.open('/congrate_page.html')

    ++voteStore[signCountry].EdwardCount
    ++totalEdward

    storeLS()
}