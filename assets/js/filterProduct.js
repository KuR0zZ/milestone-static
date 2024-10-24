const filterButtons = document.querySelectorAll('#filter-buttons button');
const productCards = document.querySelectorAll('#product-cards .col');

function filterCards(event) {
    // Iterate over each product cards
    productCards.forEach(card => {
        card.classList.add('d-none');

        // Check if card matches selected filter or show all is selected
        if(card.dataset.name === event.target.dataset.name || event.target.dataset.name === 'all')
            card.classList.remove('d-none');
    })
}

filterButtons.forEach(button => button.addEventListener('click', filterCards));