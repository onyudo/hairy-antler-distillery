"use strict";

// Fetch all products data from the API if products-list element exists
const productsList = document.getElementById('products-list');
if (productsList) {
    fetch('http://localhost:1776/api/products')
        .then(response => {
            console.log('Response received:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log('Data:', data);  // Log the data for debugging
            if (data.length === 0) {
                productsList.innerHTML = "<p>No data found.</p>";
            } else {
                data.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');
                    productDiv.innerHTML = `
                        <img src="${product.product_img}" alt="Hairy Antler Distillery's ${product.product_name}"><br>
                        <div class="product-atts">
                        <h2 class="product-name">${product.product_descriptor}</h2><br>
                        <h2 class="product-name">${product.product_name}</h2><br>
                        <p class="product-blurb">${product.product_blurb}</p><br>
                        <p class="product-price">$${product.product_price}</p><br>
                        <button class="add-to-cart" data-id="${product.product_id}" data-name="${product.product_name}" data-price="${product.product_price}" data-img="${product.product_img}">Add to Cart</button>
                        <br><a href="spirit.html?id=${product.product_id}">View More</a>
                        </div>
                    `;
                    productsList.appendChild(productDiv);
                });
                addCartListeners();
            }
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            if (productsList) {
                productsList.innerHTML = "<p>Error loading products</p>";
            }
        });
}

// Add event listeners for "Add to Cart" buttons if the element exists
function addCartListeners() {
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to add product to cart
function addToCart(event) {
    const button = event.target;
    const product = {
        id: button.getAttribute('data-id'),
        name: button.getAttribute('data-name'),
        price: parseFloat(button.getAttribute('data-price')),
        img: button.getAttribute('data-img'),
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update the cart count on the page if the element exists
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = cartCount;
    }
}

// Call the updateCartCount function on page load
window.onload = function() {
    updateCartCount();
};
