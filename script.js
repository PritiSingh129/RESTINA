// Handle search and display menu only
document.querySelector('.Search-icon').addEventListener('click', () => {
    const searchQuery = document.querySelector('.search-input').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    const menuSection = document.querySelector('#menu');
    const allSections = document.querySelectorAll('section');

    let itemFound = false;

    // Hide all sections except menu
    allSections.forEach(section => {
        if (section.id !== 'menu') {
            section.style.display = 'none';
        }
    });

    // Show menu section and apply search
    menuSection.style.display = 'block';

    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').innerText.toLowerCase();
        const itemDesc = item.querySelector('p').innerText.toLowerCase();

        if (itemName.includes(searchQuery) || itemDesc.includes(searchQuery)) {
            item.style.display = 'block';
            itemFound = true;

            // Click to view details on another page
            item.addEventListener('click', () => {
                const name = item.getAttribute('data-name');
                const desc = item.getAttribute('data-desc');
                const img = item.getAttribute('data-img');

                // Redirect to details page with parameters
                window.location.href = `details.html?name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}&img=${encodeURIComponent(img)}`;
            });

        } else {
            item.style.display = 'none';
        }
    });

    // Alert if no matching items
    if (!itemFound) {
        alert('No items found! Try another search.');
    }
});

// Trigger search with Enter key
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.Search-icon').click();
    }
});
// Select all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add click event to each item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        const desc = item.getAttribute('data-desc');
        const img = item.getAttribute('data-img');
        const price = item.getAttribute('data-price');

        // Redirect to details page with parameters
        window.location.href = `details.html?name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}&img=${encodeURIComponent(img)}&price=${encodeURIComponent(price)}`;
    });
});
// Handle review submission
document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const review = document.getElementById('review-text').value;

    if (name && review) {
        const reviewHTML = `<p><strong>${name}:</strong> ${review}</p>`;
        document.getElementById('review-list').innerHTML += reviewHTML;
        document.getElementById('review-form').reset();
    }
});
// Handle Add to Cart
document.getElementById('add-to-cart').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    const dishName = document.getElementById('dish-name').innerText;
    document.getElementById('cart-status').innerText = `${quantity} x ${dishName} added to cart! 🛒`;
});


