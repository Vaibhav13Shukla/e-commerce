let cart = [];

function addToCart(itemId) {
    // Simulate adding an item to the cart
    const item = {
        id: itemId,
        title: 'Artwork Title 1',
        price: 200
    };
    cart.push(item);
    alert('Item added to cart!');
}

function removeFromCart(itemId) {
    // Simulate removing an item from the cart
    cart = cart.filter(item => item.id !== itemId);
    alert('Item removed from cart!');
    // Optionally, refresh the cart display here
}

function checkout() {
    // Simulate checkout process
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout...');
        // Here you would typically redirect to a checkout page
    }
}

// Handle form submissions for login and registration
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Logged in as ${username}`);
    // Handle actual login logic here
});

document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Registered as ${username}`);
    // Handle actual registration logic here
});