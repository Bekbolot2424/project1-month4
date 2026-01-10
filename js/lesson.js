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

const converter = (element, targetElement) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)

            if(element.id === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2)
            }

            if (element.id === 'usd') {
                targetElement.value = (element.value * data.usd).toFixed(2)
            }

            if(element.value === '') {
                targetElement.value = ''
            }
        }
    }
}


converter(somInput, usdInput)