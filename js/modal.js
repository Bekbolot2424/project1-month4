
const modal = document.querySelector('.modal')
const modalOpenButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = "hidden"
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ""
}

modalOpenButton.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

let modalShown = false

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY>= document.body.scrollHeight - 10 && !modalShown) {
        openModal()
        modalShown = true
    }
})

setTimeout (() => {
    if (!modalShown){
        openModal()
    }
}, 10000)