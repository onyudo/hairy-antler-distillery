"use strict";

const express = require("express");
const favicon = require('express-favicon');
const sqlite = require('better-sqlite3');
const cors = require('cors');
const app = express();
const path = require("path");
const port = 1776;

// Path to SQLite database
const db = sqlite('products.db');

// CORS configuration to allow only requests from http://localhost:1776
const corsOptions = {
    origin: 'http://localhost:1776', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

// Apply CORS middleware to the app with the options
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Lost my favicon but this fixed it
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Serves the front-end content in the public directory
app.use("", express.static(path.join(__dirname, "./public")));

// API code for retrieving all products
app.get('/api/products', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM products').all();
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// API code for retrieving a single product by product_id
app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Convert the ID to an integer
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid product ID' }); // Handle invalid ID
    }
    try {
        const row = db.prepare('SELECT * FROM products WHERE product_id = ?').get(id);
        if (row) {
            res.json(row);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

// API endpoint for submitting an order from the front end
app.post('/api/checkout', (req, res) => {
    const { name, address, city, email, payment, cart, state, zip_code, cvc, age_verified, expirationDate } = req.body;

    // Ensure all required fields are present
    if (!name || !address || !city || !email || !payment || !cart || !state || !zip_code || !cvc || !age_verified || !expirationDate) {
        console.log('Invalid order data:', req.body);
        return res.status(400).json({ error: 'Invalid order data' });
    }

    // Convert age_verified boolean to 1 (true) or 0 (false)
    const ageVerified = 1;

    // Ensure that 'cart' is serialized as a JSON string
    const cartData = JSON.stringify(cart); // Convert cart array to a JSON string
    console.log('Serialized cart data:', cartData);

    const orderDate = new Date().toISOString(); // Get the current timestamp
    console.log('Order date:', orderDate);

    // Capture the expiration date from the request body (submitted from the frontend)
    const expDate = expirationDate; // Assumes the expirationDate is in MM/YY format

    try {
        // Insert the order into the database
        const insertOrder = db.prepare(`
            INSERT INTO orders 
            (name, address, city, email, state, zip_code, credit_card, cvc, age_verified, order_date, cart_data, exp_date)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const result = insertOrder.run(
            name,               // Name
            address,            // Address
            city,               // City
            email,              // Email
            state,              // State
            zip_code,           // Zip Code
            payment,            // Credit Card
            cvc,                // CVC
            ageVerified,        // Age Verification (1 or 0)
            orderDate,          // Order Date
            cartData,           // Cart Data (Serialized JSON string)
            expDate             // Expiration Date
        );

        console.log('Order placed successfully:', result);
        res.status(200).json({ message: 'Order placed successfully' });

    } catch (err) {
        console.error('Error inserting order:', err);
        res.status(500).json({ error: 'Failed to place order' });
    }
});

// Route for custom 404 error should go here - This should be the last route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Serves the whole app
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
