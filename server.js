"use strict";

const express = require("express");
const sqlite = require('better-sqlite3');
const app = express();
const path = require("path");
const port = 1776;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// API code for retrieving all products goes here

// Serves the front-end content in the public directory
app.use("", express.static(path.join(__dirname, "./public")));

// API code for retrieving single product goes here

// Route for custom 404 error goes here?

// Serves the whole app
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
})