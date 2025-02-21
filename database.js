"use strict";

const Database = require('better-sqlite3');

// Open database or create if it does not exist
const db = new Database('products.db');

// Create a products table in the database if it doesn't already exist
db.prepare(`
        CREATE TABLE IF NOT EXISTS products (
            product_id INTEGER PRIMARY KEY,
            product_img TEXT NOT NULL,
            product_name TEXT NOT NULL,
            product_blurb TEXT NOT NULL,
            product_description TEXT NOT NULL,
            product_price DECIMAL (10, 2),
            product_stock INTEGER,
            IsActive BOOLEAN
        );
`).run();

console.log('Database and table created!');

// Insert sample data into the database
const insert = db.prepare(`
    INSERT INTO products (product_img, product_name, product_blurb, product_description, product_price, product_stock, IsActive)
    VALUES (?, ?, ?, ?, ?, ?, ?)
`);

/*
// Dummy data from working prototype - needs real data to insert here!
// do an insert.run for each of the 5 products!
insert.run('Martin', 'Otis', 52, 'hazel');
insert.run('Jeremy', 'Otis', 54, 'blue');
*/

console.log('Sample data inserted!');