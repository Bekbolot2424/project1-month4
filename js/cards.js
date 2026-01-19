const cards = document.querySelector('.cards');
const API = 'https://jsonplaceholder.typicode.com/posts';

const fetchCardsData = async () => {
    try {
        const response = await fetch(`${API}?_limit=10`);
        const data = await response.json();

        data.forEach(({ title, body }) => {
            const cardBlock = document.createElement('div');
            cardBlock.classList.add('card');

            cardBlock.innerHTML = `
                <h2 class="title">${title}</h2>
                <div class="cardImg">
                    <img src="../images/arc_warden.gif">
                </div>
                <p class="body">${body}</p>
            `;

            cards.append(cardBlock);
        });

    } catch (error) {
        console.error('Fetch error:', error);
    }
};

fetchCardsData();
