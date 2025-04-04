"use strict";

// This file should not be run as is and is for reference only!

/*

// INSERT INTO for creating a new product in the products.db SQLite databse
// OR for creating a new row of data in an existing table

//Prep the insert statement

const insert = db.prepare(`
    INSERT INTO products (product_img, product_descriptor, product_name, product_blurb, product_description, product_price, product_stock, IsActive)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

// Insert a new row for a new product
insert.run(
    './img/hairy-antler-new-product.png', // product image
    'New Product Descriptor',            // product descriptor
    'New Product Name',                  // product name
    'This is a new product blurb.',      // product blurb
    'This is a longer description of the new product.', // product description
    45.99,                               // product price
    500,                                 // product stock
    1                                    // IsActive (1 for active, 0 for inactive)
);

console.log('New product inserted!');

// To update data for a specific row and column in the products.db SQLite database

// Prepare the update statement
const update =db.prepare(`
        UPDATE products
        SET product_name = ?, product_price = ?
        WHERE product_id = ?
    `);

// Update the product with product_id = 1
// In this example code I show how to change the product name and
// product price for the product with the product id of 1 - which is the Sorghum Vodka
update.run('Updated Product Name', 49.99, 1);

console.log('Product updated!');

// To add a new column of information to the existing table in the products.db SQLite database

// Example: Add a 'product_slug' column
db.prepare(`
    ALTER TABLE products
    ADD COLUMN product_slug TEXT;
`).run();

console.log('New column "product_slug" added!');

// Example: Prepare the update query to manually set the slugs
const updateSlug = db.prepare(`
    UPDATE products
    SET product_slug = ?
    WHERE product_id = ?;
`);

// Example: Update the slugs for each product
updateSlug.run('sorghum-vodka', 1);
updateSlug.run('off-trail-gin', 2);
updateSlug.run('demon-leaper', 3);
updateSlug.run('rye-whiskey', 4);
updateSlug.run('bourbon-whiskey', 5);

console.log('Product slugs added!');

*/