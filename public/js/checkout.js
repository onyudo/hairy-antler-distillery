"use strict";

// Update the cart count on the page if the element exists
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = cartCount;
    }
}

// Regular expression to check if the state is valid - only certain states are allowed!
const validStates = /^(AK|AZ|CT|HI|KY|NE|NV|NH|ND|RI)$/;

// Regular expression for validating a credit card number - Luhn algorithm but for Visa cards only!
const cardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/; // This is for Visa only, a valid number would be: 4111111111111111

// Regular expression for validating expiration date (MM/YY format)
const expDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

// Regular expression for validating CVC (3 digits)
const cvcRegex = /^[0-9]{3}$/;

// Function to load the cart from localStorage and display the order total
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTotalElement = document.getElementById('cart-total');
    
    let total = 0;

    if (cart.length === 0) {
        cartTotalElement.textContent = '0.00'; // Display $0.00 if no items
    } else {
        // Calculate the total for all items in the cart
        cart.forEach(item => {
            total += item.price * item.quantity;
        });

        // Update the total in the cart
        cartTotalElement.textContent = total.toFixed(2);
    }
}

// Handle form submission for checkout
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty. Please visit our <a href="spirits.html">spirits page</a> and add some to the cart.');
        return;
    }

    // Clear any previous error messages
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    // 1. Validate State
    const state = document.getElementById('state').value;
    if (!validStates.test(state)) {
        errorMessage.textContent = "Our apologies, we cannot ship spirits to your state of residence.";
        return;
    }

    // 2. Validate Credit Card Number
    const creditCard = document.getElementById('payment').value;
    if (!cardRegex.test(creditCard)) {
        errorMessage.textContent = "Please enter a valid credit card number.";
        return;
    }

    // 3. Validate Expiration Date
    const expDate = document.getElementById('exp-date').value;
    if (!expDateRegex.test(expDate)) {
        errorMessage.textContent = "Please enter a valid expiration date in MM/YY format.";
        return;
    }

    // 4. Validate CVC
    const cvc = document.getElementById('cvc').value;
    if (!cvcRegex.test(cvc)) {
        errorMessage.textContent = "Please enter a valid CVC (3 digits).";
        return;
    }

    // 5. Validate Age Verification Checkbox
    const ageVerified = document.getElementById('age-verification').checked;
    if (!ageVerified) {
        errorMessage.textContent = "You must be 21 years of age or older to order our spirits.";
        return;
    }

    // If all fields pass validation, proceed with the form submission (you can process the data here)
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    // Simulate order submission
    console.log('Order placed:', { name, address, payment, cart });

    // Clear cart after order
    localStorage.removeItem('cart');
    
    // Redirect to a confirmation page or thank you page
    alert('Thank you for your order!');
    window.location.href = 'order-confirmation.html';
});

// Load the cart and update the total when the page loads
window.onload = function() {
    loadCart();
    updateCartCount(); // Ensure this is called on the checkout page to update the cart count
};
