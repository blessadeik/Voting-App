//menu open and close

const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('nav')
const header = document.querySelector('header')

menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active')
        nav.classList.toggle('active')
        header.classList.toggle('active')
})


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

const mapState = document.querySelector(".svg-one").children
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

for (let i = 0; i < allCountry.length; i++){
    voteStore.push(allCountry[i] = new StateObj())
}



let totalElon = 0
let totalEdward = 0

let totalVote = totalElon + totalEdward ;

//function so store in Local Storage
function storeLS () {
    localStorage.setItem('votedStore', JSON.stringify(voteStore))
    localStorage.setItem('elTotal', totalElon)
    localStorage.setItem('edTotal', totalEdward)
    localStorage.setItem('votedTotal', totalVote)
    localStorage.setItem('displayedCountry', countryToDisplay)
}


//class Constructor for objects
function StateObj() {
    this.ElonCount = 0
    this.EdwardCount = 0
}


// let ibadan = new StateObj()

// console.log(ibadan)

//assign variables from local Storage to variables
let elTotal = localStorage.getItem('elTotal')
let edTotal = localStorage.getItem('edTotal')
let votedTotal = localStorage.getItem('votedTotal')
let voteStoreLS = localStorage.getItem('votedStore');


if (elTotal) {
    totalElon = Math.floor(elTotal)
}


if (edTotal) {
    totalEdward = Math.floor(edTotal)
}


if (votedTotal) {
    totalVote = Math.floor(votedTotal)
}


if (voteStoreLS) {
    voteStore = JSON.parse(voteStoreLS)
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
const techieName = document.getElementById('techie')
const countryFrom = document.getElementById('country-from')


function voteElon(){
    let signCountry = allCountryAgain.indexOf(countryToDisplay)

    techieName.textContent = 'ELON MUSK';
    countryFrom.textContent = countryToDisplay;
    
    startConfetti();

    ++voteStore[signCountry].ElonCount
    ++totalElon
    nextPage()
    
    storeLS()
    
    //assign variables from local Storage to variables
    let elTotal = localStorage.getItem('elTotal')
    let edTotal = localStorage.getItem('edTotal')
    let votedTotal = localStorage.getItem('votedTotal')
    let voteStoreLS = localStorage.getItem('votedStore');


    if (elTotal) {
        totalElon = Math.floor(elTotal)
    }


    if (edTotal) {
        totalEdward = Math.floor(edTotal)
    }


    if (votedTotal) {
        totalVote = Math.floor(votedTotal)
    }


    if (voteStoreLS) {
        voteStore = JSON.parse(voteStoreLS)
    }
}

function voteEdward(){
    let signCountry = allCountryAgain.indexOf(countryToDisplay)

    techieName.textContent = 'EDWARD CAMPBELL';
    countryFrom.textContent = countryToDisplay;

    startConfetti();

    ++voteStore[signCountry].EdwardCount
    ++totalEdward

    nextPage()

    storeLS()
    
    //assign variables from local Storage to variables
    let elTotal = localStorage.getItem('elTotal')
    let edTotal = localStorage.getItem('edTotal')
    let votedTotal = localStorage.getItem('votedTotal')
    let voteStoreLS = localStorage.getItem('votedStore');

    if (elTotal) {
        totalElon = Math.floor(elTotal)
    }


    if (edTotal) {
        totalEdward = Math.floor(edTotal)
    }


    if (votedTotal) {
        totalVote = Math.floor(votedTotal)
    }


    if (voteStoreLS) {
        voteStore = JSON.parse(voteStoreLS)
    }
}


// delete later
let madKeh = {
    HI: {
      name: "Hawaii",
      color: "#88A4BC"
    },
    AK: {
      name: "Alaska",
      color: "#88A4BC"
    },
    FL: {
      name: "Florida",
      color: "#88A4BC"
    },
    NH: {
      name: "New Hampshire",
      color: "#88A4BC"
    },
    VT: {
      name: "Vermont",
      color: "#88A4BC"
    },
    ME: {
      name: "Maine",
      color: "#88A4BC"
    },
    RI: {
      name: "Rhode Island",
      color: "#88A4BC"
    },
    NY: {
      name: "New York",
      color: "#88A4BC"
    },
    PA: {
      name: "Pennsylvania",
      color: "#88A4BC"
    },
    NJ: {
      name: "New Jersey",
      color: "#88A4BC"
    },
    DE: {
      name: "Delaware",
      color: "#88A4BC"
    },
    MD: {
      name: "Maryland",
      color: "#88A4BC"
    },
    VA: {
      name: "Virginia",
      color: "#88A4BC"
    },
    WV: {
      name: "West Virginia",
      color: "#88A4BC"
    },
    OH: {
      name: "Ohio",
      color: "#88A4BC"
    },
    IN: {
      name: "Indiana",
      color: "#88A4BC"
    },
    IL: {
      name: "Illinois",
      color: "#88A4BC"
    },
    CT: {
      name: "Connecticut",
      color: "#88A4BC"
    },
    WI: {
      name: "Wisconsin",
      color: "#88A4BC"
    },
    NC: {
      name: "North Carolina",
      color: "#88A4BC"
    },
    DC: {
      name: "District of Columbia",
      color: "#88A4BC"
    },
    MA: {
      name: "Massachusetts",
      color: "#88A4BC"
    },
    TN: {
      name: "Tennessee",
      color: "#88A4BC"
    },
    AR: {
      name: "Arkansas",
      color: "#88A4BC"
    },
    MO: {
      name: "Missouri",
      color: "#88A4BC"
    },
    GA: {
      name: "Georgia",
      color: "#88A4BC"
    },
    SC: {
      name: "South Carolina",
      color: "#88A4BC"
    },
    KY: {
      name: "Kentucky",
      color: "#88A4BC"
    },
    AL: {
      name: "Alabama",
      color: "#88A4BC"
    },
    LA: {
      name: "Louisiana",
      color: "#88A4BC"
    },
    MS: {
      name: "Mississippi",
      color: "#88A4BC"
    },
    IA: {
      name: "Iowa",
      color: "#88A4BC"
    },
    MN: {
      name: "Minnesota",
      color: "#88A4BC"
    },
    OK: {
      name: "Oklahoma",
      color: "#88A4BC"
    },
    TX: {
      name: "Texas",
      color: "#88A4BC"
    },
    NM: {
      name: "New Mexico",
      color: "#88A4BC"
    },
    KS: {
      name: "Kansas",
      color: "#88A4BC"
    },
    NE: {
      name: "Nebraska",
      color: "#88A4BC"
    },
    SD: {
      name: "South Dakota",
      color: "#88A4BC"
    },
    ND: {
      name: "North Dakota",
      color: "#88A4BC"
    },
    WY: {
      name: "Wyoming",
      color: "#88A4BC"
    },
    MT: {
      name: "Montana",
      color: "#88A4BC"
    },
    CO: {
      name: "Colorado",
      color: "#88A4BC"
    },
    UT: {
      name: "Utah",
      color: "#88A4BC"
    },
    AZ: {
      name: "Arizona",
      color: "#88A4BC"
    },
    NV: {
      name: "Nevada",
      color: "#88A4BC"
    },
    OR: {
      name: "Oregon",
      color: "#88A4BC"
    },
    WA: {
      name: "Washington",
      color: "#88A4BC"
    },
    CA: {
      name: "California",
      color: "#88A4BC"
    },
    MI: {
      name: "Michigan",
      color: "#88A4BC"
    },
    ID: {
      name: "Idaho",
      color: "#88A4BC"
    },
    GU: {
      name: "Guam",
      hide: "yes",
      color: "#88A4BC"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes",
      color: "#88A4BC"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes",
      color: "#88A4BC"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes",
      color: "#88A4BC"
    },
    AS: {
      name: "American Samoa",
      hide: "yes",
      color: "#88A4BC"
    }
};
console.log(madKeh.AK.color)

//to reload/revote
function reVote() {
        sideList[inPage].classList.remove('active')
        mainContent[inPage].classList.remove('display')
        agreeCheck.checked = false;
    
        inPage = 0
        location.reload()
    
        
        sideList[inPage].classList.add('active')
        mainContent[inPage].classList.add('display')

        
        countryToDisplay = ""
        countryDisplay.textContent = countryToDisplay;
        clearCountry.style.display = "none";
        agreeCheck.checked = false
        agreeBtn.classList.remove('clicked')
        agreeBtn.removeEventListener('click', nextPage)
        selectCountryBtn.classList.remove('clicked')
        selectCountryBtn.removeEventListener('click', nextPage)
        voteBtn.classList.remove('clicked')
        voteBtn.removeEventListener('click', nextPage)

        elonCard.classList.remove('carder')
        edwardCard.classList.remove('carder')

        stopConfetti();
}

//progress bar
let elonBar = document.querySelector('.elon-bar')
let elonCountShow = document.querySelector('.elon-count')
let edwardBar = document.querySelector('.edward-bar')
let edwardCountShow = document.querySelector('.edward-count')

elonCountShow.textContent = totalElon
edwardCountShow.textContent = totalEdward

let elonWidth = Math.round((totalElon / (totalElon + totalEdward)) * 100)
let edwardWidth = Math.round((totalEdward / (totalElon + totalEdward)) * 100)

elonBar.style.width = elonWidth + '%'
edwardBar.style.width = edwardWidth + '%'

//try to reload last page
function reloadLast() {    
    sideList[3].classList.remove('active')
    mainContent[3].classList.remove('display')

    setTimeout(showAgain, 2000)
}

function showAgain() {
    
    sideList[3].classList.add('active')
    mainContent[3].classList.add('display')

        
    elonCountShow.textContent = totalElon
    edwardCountShow.textContent = totalEdward


    elonBar.style.width = elonWidth + '%'
    edwardBar.style.width = edwardWidth + '%'

}