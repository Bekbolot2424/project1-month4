//PHONECHECKER//

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d\d \d\d-\d\d-\d\d$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerHTML = 'ERROR'
        phoneResult.style.color = "red"
    }
}

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabContentItems = document.querySelectorAll(".tab_content_item")
const tabContentItemsParent = document.querySelector(".tab_content_items")

const hideTabContent = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = "none"
    })
    tabContentItems.forEach((item) => {
        item.classList.remove("tab_content_item_active")
    })
}

const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = "block"
    tabContentItems[i].classList.add("tab_content_item_active")
}

hideTabContent()
showTabContent()

tabContentItemsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabContentItems.forEach((item, index) => {
            if(event.target === item) {
                hideTabContent()
                tabIndex = index
                showTabContent(tabIndex)

            }
        })
    }
}

let tabIndex = 0

setInterval (() => {
    hideTabContent()
    tabIndex++
    if(tabIndex >= tabContentBlocks.length) {
        tabIndex = 0
    }
    showTabContent(tabIndex)
}, 3000)


//CONVERTER


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = async () => {
    try {
        const response = await fetch('../data/converter.json')
        if (!response.ok) throw new Error('Ошибка загрузки JSON')

        const rates = await response.json()

        const convertMoney = (from, to) => {
            from.addEventListener('input', () => {
                if (from.value === '') {
                    to.value = ''
                    return
                }

                const value = Number(from.value)

            
                let som
                if (from.id === 'som') som = value
                if (from.id === 'usd') som = value * rates.usd
                if (from.id === 'eur') som = value * rates.eur

            
                if (to.id === 'som') to.value = som.toFixed(2)
                if (to.id === 'usd') to.value = (som / rates.usd).toFixed(2)
                if (to.id === 'eur') to.value = (som / rates.eur).toFixed(2)
            })
        }

        convertMoney(som, usd)
        convertMoney(som, eur)
        convertMoney(usd, som)
        convertMoney(usd, eur)
        convertMoney(eur, som)
        convertMoney(eur, usd)

    } catch (error) {
        console.error(error)
    }
}

converter()


//CARD SWITCHER

const card = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
let cardId = 1

const cardSwitch = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`);

        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }

        const data = await response.json();
        const { title, completed, id } = data;

        card.style.borderColor = completed ? 'green' : 'red';
        card.innerHTML = `
            <p>${title}</p>
            <span>${id}</span>
        `;
    } catch (error) {
        console.error('Card switch error:', error.message);
    }
};


    btnNext.onclick = () => {
        if(cardId < 200){
            cardId++
            cardSwitch()
        }else{
            cardId = 1
            cardSwitch()
        }
    }
    btnPrev.onclick = () => {
        if(cardId > 1) {
            cardId--
            cardSwitch()
        }else{
            cardId = 200
            cardSwitch()
        }
    }

cardSwitch()


//  POSTS  //

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Ошибка загрузки постов');
        }

        const data = await response.json();

        data.forEach(post => {
            console.log(post);
        });

    } catch (error) {
        console.error('Posts error:', error.message);
    }
};

fetchPosts();


/////WEATHER////
const searchInput = document.querySelector("#searchInput")
const searchButton = document.querySelector("#search")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

searchButton.onclick = () => {
    if(searchInput.value === ""){
        city.innerHTML = 'Введите название города'
        temp.innerHTML = ''
        city.style.color = 'red'
    }else {
        fetch(`${BASE_URL}?q=${searchInput.value}&units=metric&lang=ru&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if(data.name) {
                    city.innerHTML = data.name
                    city.style.color = "white"
                } else{
                    city.innerHTML = "Город не найден"
                    temp.innerHTML = ""
                    city.style.color = 'red'
                }
                temp.innerHTML = Math.round(data.main.temp) + '&deg;C'
                city.style.color = "white"
            })
        searchInput.value = ""
    }
}
