"use strict";

const express = require("express");
const favicon = require('express-favicon');
const sqlite = require('better-sqlite3');
const app = express();
const path = require("path");
const port = 1776;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Serves the front-end content in the public directory
app.use("", express.static(path.join(__dirname, "./public")));

// API code for retrieving all products goes here

// API code for retrieving single product goes here

// Route for custom 404 error goes here?

// checking to see if nodemon is working

// Serves the whole app
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
})