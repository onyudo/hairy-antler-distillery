"use strict";

// Fetch all products data from the API
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
        const productsList = document.getElementById('products-list');
        if (data.length === 0) {
            productsList.innerHTML = "<p>No data found.</p>";
        } else {
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.product_img}" alt="Hairy Antler Distillery's ${product.product_name}"><br>
                    <h2 class="product-name">${product.product_name}</h2><br>
                    <p class="product-blurb">${product.product_blurb}</p><br>
                    <p class="product-price">${product.product_price}<p><br>
                    <a href="product.html?id=$${product.product_id}">View More</a>
                `;
                productsList.appendChild(productDiv);
            });
        }
    })
    .catch(err => {
        console.error('Error fetching data:', err);  // Log any errors
        document.getElementById('products-list').innerHTML = "<p>Error loading products</p>";
    });
