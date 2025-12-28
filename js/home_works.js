// GMAILCHECKER //

const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^[a-zA-Z][a-zA-Z0-9._]{2,}@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "ERROR"
        gmailResult.style.color = 'red'
    }
}


// Move BLOCK //

const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")

let positionX = 0

const offsetWidth = parentBlock.clientWidth - childBlock.offsetWidth

const moveBlock = () => {
    positionX++
    childBlock.style.left= `${positionX}px`
    if (positionX < offsetWidth) {
        requestAnimationFrame(moveBlock)
    } 
}

moveBlock()




