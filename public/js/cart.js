"use strict";

// Function to load the cart from localStorage and display items, along with a grand total
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    const productsLink = document.getElementById('products-link'); // Button to all products
    
    let grandTotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
        cartTotalElement.textContent = '0.00'; // Display $0.00 if no items
        checkoutButton.style.display = 'none'; // Hide checkout button
        productsLink.style.display = 'block'; // Show the button to all products page
    } else {
        cartItemsContainer.innerHTML = ''; // Clear previous content

        // Iterate through each item in the cart and display it
        cart.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            const itemSubtotal = (item.price * item.quantity).toFixed(2);
            grandTotal += parseFloat(itemSubtotal); // Add the item subtotal to the grand total
            productDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.descriptor}</h4>  <!-- Display the descriptor here -->
                    <h3>${item.name}</h3>
                    <div class="quantity-price">
                        <p class="cart-quantity"> 
                            <!-- Use SVG icons as buttons -->
                            <span class="decrement" data-index="${index}" role="button" aria-label="Decrease quantity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                                </svg>
                            </span>
                            <span class="quantity">${item.quantity}</span> 
                            <span class="increment" data-index="${index}" role="button" aria-label="Increase quantity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                </svg>
                            </span>
                        </p>
                        <div class="cart-price-delete">
                            <p class="cart-price">$${item.price}</p>
                            <button class="delete" data-index="${index}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p class="cart-subtotal">Subtotal: $${itemSubtotal}</p>
                </div>
            `;
            cartItemsContainer.appendChild(productDiv);
        });

        // Update the grand total displayed at the bottom
        cartTotalElement.textContent = grandTotal.toFixed(2); // Display the total with 2 decimal points
        checkoutButton.style.display = 'block'; // Show checkout button
        productsLink.style.display = 'none'; // Hide button to all products page
    }

    // Add event listeners for increment, decrement, and delete
    document.querySelectorAll('.increment').forEach(icon => {
        icon.addEventListener('click', handleIncrement);
    });

    document.querySelectorAll('.decrement').forEach(icon => {
        icon.addEventListener('click', handleDecrement);
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
}

// Handle incrementing the item quantity
function handleIncrement(event) {
    const index = event.currentTarget.getAttribute('data-index'); // Use currentTarget
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += 1; // Increment quantity by 1
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    loadCart(); // Re-render the cart
}

// Handle decrementing the item quantity
function handleDecrement(event) {
    const index = event.currentTarget.getAttribute('data-index'); // Use currentTarget
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart[index].quantity > 1) { // Prevent quantity from going below 1
        cart[index].quantity -= 1; // Decrement quantity by 1
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
        loadCart(); // Re-render the cart
    }
}

// Handle deleting the item from the cart
function handleDelete(event) {
    const index = event.currentTarget.getAttribute('data-index'); // Use currentTarget
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.splice(index, 1); // Remove item from the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    loadCart(); // Re-render the cart
}

// Handle checkout button click
document.getElementById('checkout-button').addEventListener('click', function() {
    window.location.href = 'checkout.html'; // Redirect to checkout page
});

// Handle products button click (link to spirits.html)
document.getElementById('products-link').addEventListener('click', function() {
    window.location.href = 'spirits.html'; // Redirect to spirits page
});

// Load the cart when the page loads
window.onload = function() {
    loadCart();
};
