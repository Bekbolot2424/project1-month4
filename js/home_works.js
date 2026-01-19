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
let positionY = 0

const offsetWidth = parentBlock.clientWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.clientHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        requestAnimationFrame(moveBlock)
        positionX++
        childBlock.style.left = `${positionX}px`
    }else if (positionX  >= offsetWidth && positionY < offsetHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if (positionY >= offsetHeight && positionX > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()


// TIMER

const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")
let timerValue = document.querySelector("#seconds")

let seconds = 0
let interval = null

startButton.addEventListener("click",() => {
    if (interval) return;
    interval = setInterval(() => {
        seconds++
        timerValue.textContent = seconds
    }, 1000)
 
})

stopButton.addEventListener("click",() => {
    clearInterval(interval)
    interval = null;
})

resetButton.addEventListener("click",() => {
    clearInterval(interval)
    interval = null
    seconds = 0
    timerValue.textContent = seconds
})

//CHARECTERS

const fetchCharacters = async () => {
    try {
        const response = await fetch("../data/characters.json");

        if (!response.ok) {
            throw new Error("Ошибка загрузки персонажей");
        }

        const data = await response.json();

        data.forEach(character => {
            const card = document.createElement("div");
            card.classList.add("character-card");

            card.innerHTML = `
                <div class="character-photo">
                    <img src="${character.image}" alt="${character.name}">
                </div>
                <h3>${character.name}</h3>
                <p>age: ${character.age}</p>
            `;

            charactersList.append(card);
        });

    } catch (error) {
        console.error("Characters error:", error.message);
    }
};

fetchCharacters();

//any

const fetchAnyData = async () => {
    try {
        const response = await fetch("../data/any.json");

        if (!response.ok) {
            throw new Error("Ошибка загрузки данных");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error("Any error:", error.message);
    }
};

fetchAnyData();
