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


