"use strict";

const express = require("express");
const favicon = require('express-favicon');
const sqlite = require('better-sqlite3');
const cors = require('cors');
const app = express();
const path = require("path");
const port = 1776;

// Path to my SQLite database
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
        // Use 'product_id' instead of 'id' in the query
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

// Route for custom 404 error should go here - This should be the last route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Serves the whole app
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
