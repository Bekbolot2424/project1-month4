// GMAILCHECKER //

const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^[a-zA-Z][a-zA-Z0-9._]{1,}@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "ERROR"
        gmailResult.style.color = 'red'
    }
}


// RED BLOCK //

const redBlock = document.querySelector(".child_block");
redBlock.style.position = "relative";
let blockPosition = 0;

function blockMove() {
    if (blockPosition < 450) {
        blockPosition ++
        redBlock.style.left = blockPosition + "px";
        requestAnimationFrame(blockMove);
    }
}

redBlock.onclick = () => {
    blockMove();
};





