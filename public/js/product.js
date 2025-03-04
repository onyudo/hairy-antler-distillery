"use strict";

// Get the product ID from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');  // Get the 'id' parameter from the URL

if (!productId) {
    // If no product ID is found, redirect to the products page
    window.location.href = "products.html";
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
        })
        .catch(err => {
            console.error('Error fetching product:', err);
            document.getElementById('product-details').innerHTML = "<p>Error loading product details</p>";
        });

    // Set up the button to navigate back to the products page
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = "products.html";
    });
}
