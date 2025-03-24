"use strict";
/*

// This file was needed to add the orders table to the database

const sqlite = require('better-sqlite3');
const db = sqlite('products.db'); // Path to SQLite database file

// Create the 'orders' table if it doesn't already exist
function createOrdersTable() {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        email TEXT NOT NULL,
        state TEXT NOT NULL,
        zip_code TEXT NOT NULL,
        credit_card TEXT NOT NULL,
        exp_date TEXT NOT NULL,
        cvc TEXT NOT NULL,
        age_verified BOOLEAN NOT NULL,
        order_date TEXT NOT NULL,
        cart_data TEXT NOT NULL
    );
    `;

    try {
        // Execute the query to create the table
        db.prepare(createTableQuery).run();
        console.log("Orders table created successfully (if it didn't already exist).");
    } catch (err) {
        console.error("Error creating the orders table:", err);
    }
}

// Call the function to create the table
createOrdersTable();
*/