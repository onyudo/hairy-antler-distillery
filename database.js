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

// Still needs links to bottle images and longer product descriptions for each product here!
insert.run('../img/hairy-antler-vodka.png', 'Kentucky Original Sorghum Vodka', 'Our 100% Estate grown Kentucky original Sorghum Vodka', 'longer prodcut description goes here', 35.99, 750, true);
insert.run('../img/hairy-antler-gin.png', 'Kentucky Foraged Off Trail Gin', 'Kentucky foraged botanical Gin', 'longer prodcut description goes here', 35.99, 750, true);
insert.run('../img/hairy-antler-demon-leaper.png', 'Demon Leaper Herbal Liqueur', 'Our limited edition Kentucky foraged Herbal Liqueur, aged for 5 years', 'longer prodcut description goes here', 65.99, 450, true);
insert.run('../img/hairy-antler-rye.png', 'Kentucky Straight Rye Whiskey', 'Our 100% Kentucky Rye Whiskey, aged for 3 years', 'longer prodcut description goes here', 75.99, 750, true);
insert.run('../img/hairy-antler-bourbon.png', 'Kentucky Straight Bourbon Whiskey', 'Our Kentucky Straight Bourbon Whiskey, aged for 7 years', 'longer prodcut description goes here', 85.99, 750, true);

console.log('Sample data inserted!');