"use strict";

// Get the product ID from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');  // Get the 'id' parameter from the URL

if (!productId) {
    // If no product ID is found, redirect to the products page
    window.location.href = "spirits.html";
} else {
    // Fetch the product data using the product ID
    fetch(`http://localhost:1776/api/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(product => {
            // Display product details
            document.getElementById('product-name').textContent = product.product_name;
            document.getElementById('product-img').src = product.product_img;
            document.getElementById('product-img').alt = product.product_name;
            document.getElementById('product-description').textContent = product.product_description;
            document.getElementById('product-price').textContent = '$' + product.product_price;

            // Add event listener for Add to Cart button
            document.getElementById('add-to-cart-button').addEventListener('click', function() {
                addToCart(product);
            });
        })
        .catch(err => {
            console.error('Error fetching product:', err);
            document.getElementById('product-details').innerHTML = "<p>Error loading product details</p>";
        });

    // Set up the button to navigate back to the products page
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = "spirits.html";
    });
}

// Function to add the product to the shopping cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.product_id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        const productToAdd = {
            id: product.product_id,
            name: product.product_name,
            price: product.product_price,
            img: product.product_img,
            quantity: 1
        };
        cart.push(productToAdd);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, update cart icon count here
    updateCartCount();
}

// Function to update the cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;  // Update the cart count in the cart icon
}

// Update the cart count when the page loads
window.onload = function() {
    updateCartCount();
};
