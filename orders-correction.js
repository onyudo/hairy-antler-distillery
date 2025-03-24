"use strict";

/*

// This file was needed to add the city column to the database
// I missed including this column when I created the database

const sqlite = require('better-sqlite3');
const db = sqlite('products.db'); // Path to SQLite database file

// Add the 'city' column if it doesn't exist
function addCityColumn() {
    const alterTableQuery = `
    ALTER TABLE orders
    ADD COLUMN city TEXT;
    `;

    try {
        // Execute the query to add the column
        db.prepare(alterTableQuery).run();
        console.log('New column "city" added!');
    } catch (err) {
        console.error('Error adding column "city":', err);
    }
}

// Call the function to add the column
addCityColumn();

*/