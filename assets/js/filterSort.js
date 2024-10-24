const sortSelect = document.getElementById('sort-options');
const productCardsContainer = document.getElementById('product-cards');
const filterButtons = document.querySelectorAll('#filter-buttons button');

// Store the original product order
const originalOrder = Array.from(productCardsContainer.children).map(card => card.cloneNode(true));

const updateVisibleProducts = () => {
    const visibleProducts = Array.from(productCardsContainer.children).filter(card => !card.classList.contains('d-none'));
    return visibleProducts;
};

const sortProducts = (order) => {
    const products = updateVisibleProducts();

    products.sort((a, b) => {
        const priceA = parseInt(a.querySelector('h3').innerText.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.querySelector('h3').innerText.replace(/[^0-9]/g, ''));

        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });

    // Clear and re-add sorted products
    productCardsContainer.innerHTML = '';
    products.forEach(product => productCardsContainer.appendChild(product));
};

sortSelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'asc') {
        sortProducts('asc');
    } else if (selectedValue === 'desc') {
        sortProducts('desc');
    } else if (selectedValue === 'default') {
        resetToDefaultOrder();
    }
});

// Function to reset products to their original order
function resetToDefaultOrder() {
    productCardsContainer.innerHTML = ''; // Clear current products
    originalOrder.forEach(product => productCardsContainer.appendChild(product.cloneNode(true))); // Re-add original products
}

// Filter functionality
function filterCards(event) {
    const filterValue = event.target.dataset.name;

    // Iterate over each product card
    originalOrder.forEach(card => {
        card.classList.add('d-none'); // Hide all cards

        // Show cards that match the selected filter or if "Show all" is selected
        if (card.dataset.name === filterValue || filterValue === 'all') {
            card.classList.remove('d-none');
        }
    });

    // Reset sorting to default when filtering
    sortSelect.value = 'default';
    resetToDefaultOrder();
}

filterButtons.forEach(button => button.addEventListener('click', filterCards));