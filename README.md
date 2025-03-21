# Hairy Antler Distillery

## Deepscan Status

[![DeepScan grade](https://deepscan.io/api/teams/26378/projects/29024/branches/935190/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=26378&pid=29024&bid=935190)

## Overview

Hairy Antler Distillery is a fictional Kentucky Distillery which produces a Vodka, a Gin, an Herbal Liqueur, a Rye Whiskey as well as a line of Bourbons.

This project is designed to showcase the distillery's products in a user-friendly and engaging format. Built using HTML, CSS, and JavaScript, the project explores basic eCommerce functionality—allowing users to browse products, view detailed information, and simulate an online shopping experience.

To enhance functionality, the project utilizes two custom REST APIs to handle dynamic content, such as product information. The eCommerce aspect includes the ability to add and manipulate products in a shopping cart, view product details, and proceed through a simulated checkout process (without full payment processing).

## SQL Database

A key aspect of the project is the use of a custom Better-SQLite3 database to store and manage product information and attributes. The database efficiently handles details such as product names, prices, descriptions, and other relevant attributes.

## API Information

To further enhance the site’s functionality, the project utilizes two custom REST APIs to interact with the database and provide dynamic content, including product details, product prices and descriptions.

## Technologies Used

The tools, technologies and frameworks used for this project are as follows: VS Code, Firefox Developers Edition browser, Git, GitHub, Node.js, NPM, Nodemon, Express.js, CORS, Better-SQLite3, Adobe Web Fonts and Bootstrap Icons. API testing was acomplished via the Postman desktop application. Cross browser and platform testing was accomplished with LambdaTest.

## Project Features

Hairy Antler Distillery meets the recommended requirements for a Code:You capstone project. Below you will find a detailed list on what requirements have been met from the Project Requirements document, as well as how it meets said requirements.

#### Implement responsive design using media queries, CSS Grid, Flexbox, etc. Your application should adapt to at least two screen sizes (mobile and desktop).

- This project utilized a Mobile First desgin approach and made heavy use of CSS Flexbox. It targets the following four device widths: 
  - @media (width >= 350px)
  - @media (width >= 500px)
  - @media (width >= 768px)
  - @media (width >= 1400px)

#### Use arrays, object, sets, or maps to store and retrieve information that is displayed in your app.

- The project uses arrays and objects to store and manage data. Arrays are used to hold the list of products fetched from the APIs and the items in the shopping cart, with each cart item represented as an object containing product details like ID, name, price, and quantity. Objects are employed to structure individual product information and to store data about each product in the cart.

#### Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.

- The project analyzes data stored in arrays and objects and displays information in the app. Specifically, it retrieves product data stored in an array (from an API response), processes each product (represented as an object), and dynamically generates HTML elements to display product details on the page. Additionally, when a product is added to the shopping cart, it is stored in an array (in local storage) and updated with the product's details, which are also objects.

#### Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).

- Regular expressions (regex) are used to validate various user inputs during the simulated checkout process, ensuring that the data entered is in the correct format before being processed. The regex checks if the email, state, zip code, credit card number, expiration date, CVC, and age verification meet specific patterns. If any input fails validation, an error message is displayed and the user is prevented from submitting the form.
- <mark>**IMPORTANT NOTE:** Please review the project file called **checkout-notes.md** to see important information regarding proper and improper entries to test form validation for the simulated checkout sequence.</mark>

#### Create a node.js web server using a modern framework such as Express.js or Fastify.  Serve at least one route that your app uses (must serve more than just the index.html file).

- This project uses a node.js web server using the Express.js framework. One of the key features of this server is the API route /api/products, which retrieves all products from a SQLite database. The server uses the better-sqlite3 library to interact with the database and respond with product data in JSON format. Another route, /api/products/:id, allows users to fetch information about a specific product by its ID. These API endpoints serve data to the front-end, allowing dynamic content to be displayed on the website. Additionally, the server handles errors, serving a custom 404 page when an unknown route is accessed. This approach ensures that the app can handle both static content and dynamic data requests effectively.

#### Interact with a database to store and retrieve information (e.g. MySQL, MongoDB, etc).

- This project uses the better-sqlite3 library to interact with an SQLite database called products.db. It stores information about various products, including details like product image paths, names, descriptions, prices, stock quantities, and their active status. The products can later be retrieved using SQL SELECT queries, typically for displaying the data through API routes in my application.

## node.js and npm

In order to run this project locally you will need to have node.js and npm installed. Node.js version 22.14.0 and npm version 10.9.2 were used during development.

To see which version of node.js and npm you have installed you can run `node -v` and `npm -v` respectively.

If you do not have node.js or npm installed (or need to update them) please visit [nodejs.org](https://nodejs.org/en) and use the installer appropriate for your computer's operating system.

## Running the Project Locally

1. Clone the project repository to your local environment:

```bash
  git clone https://github.com/onyudo/hairy-antler-distillery.git
```

2. Navigate to the project directory:

```bash
  cd hairy-antler-distillery
```

3. If you would like to examine the files using Visual Studio Code, open the project by running:

```bash
code .
```

- If you are not using VS Code please follow the instructions specific to your code editor for opening project folders and files.

- **Optional:** If you are using VS Code and would like to inspect or view the Better-SQLite3 databse, you will need to install the [SQLite Explorer](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) extension.

4. Install the packages that are necessary to run the project by using:

```bash
npm i
```

5. Once the packages are installed you can get the project up and running using:
   
```bash
npm run dev
```

6. Open the browser of your choice and navigate to [localhost:1776](http://localhost:1776/), the landing page for Hairy Antler Distillery will load.

7. To stop the project from running:

```bash
Ctrl+C
```