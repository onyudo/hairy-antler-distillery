"use strict";

// Function to load the cart from localStorage and display items, along with a grand total
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    const productsLink = document.getElementById('products-link'); // Link to all products
    
    let grandTotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
        cartTotalElement.textContent = '0.00'; // Display $0.00 if no items
        checkoutButton.style.display = 'none'; // Hide checkout button
        productsLink.style.display = 'block'; // Show link to all products page
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
                <h3>${item.name}</h3>
                <button class="delete" data-index="${index}">&#x1F5D1</button>
                <div class="quantity-price">
                <p class="cart-quantity">Quantity: <button class="decrement" data-index="${index}">-</button> 
                <span class="quantity">${item.quantity}</span> 
                <button class="increment" data-index="${index}">+</button></p>
                <p class="cart-price">Price: $${item.price}</p>
                </div>
                <p>Subtotal: $${itemSubtotal}</p>
                </div>
            `;
            cartItemsContainer.appendChild(productDiv);
        });

        // Update the grand total displayed at the bottom
        cartTotalElement.textContent = grandTotal.toFixed(2); // Display the total with 2 decimal points
        checkoutButton.style.display = 'block'; // Show checkout button
        productsLink.style.display = 'none'; // Hide link to all products page
    }

    // Add event listeners for increment, decrement, and delete
    document.querySelectorAll('.increment').forEach(button => {
        button.addEventListener('click', handleIncrement);
    });

    document.querySelectorAll('.decrement').forEach(button => {
        button.addEventListener('click', handleDecrement);
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
}

// Handle incrementing the item quantity
function handleIncrement(event) {
    const index = event.target.getAttribute('data-index');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += 1; // Increment quantity by 1
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    loadCart(); // Re-render the cart
}

// Handle decrementing the item quantity
function handleDecrement(event) {
    const index = event.target.getAttribute('data-index');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart[index].quantity > 1) { // Prevent quantity from going below 1
        cart[index].quantity -= 1; // Decrement quantity by 1
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
        loadCart(); // Re-render the cart
    }
}

// Handle deleting the item from the cart
function handleDelete(event) {
    const index = event.target.getAttribute('data-index');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.splice(index, 1); // Remove item from the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    loadCart(); // Re-render the cart
}

// Handle checkout button click
document.getElementById('checkout-button').addEventListener('click', function() {
    window.location.href = 'checkout.html'; // Redirect to checkout page
});

// Load the cart when the page loads
window.onload = function() {
    loadCart();
};
