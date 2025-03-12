# Hairy Antler Distillery

## Overview

Hairy Antler Distillery is a fictional Kentucky Distillery which produces a Vodka, a Gin, an Herbal Liqueur, a Rye Whiskey as well as a line of Bourbons.

This project is designed to showcase the distillery's products in a user-friendly and engaging format. Built using HTML, CSS, and JavaScript, the project explores basic eCommerce functionality—allowing users to browse products, view detailed information, and simulate an online shopping experience.

To enhance functionality, the project utilizes two custom REST APIs to handle dynamic content, such as product information. The eCommerce aspect includes the ability to add and manipulate products in a shopping cart, view product details, and proceed through a simulated checkout process (without full payment processing).

## SQL Database

A key aspect of the project is the use of a custom Better-SQLite3 database to store and manage product information and attributes. The database efficiently handles details such as product names, prices, descriptions, and other relevant attributes.

## API Information

To further enhance the site’s functionality, the project utilizes two custom REST APIs to interact with the database and provide dynamic content, including product details, product prices and descriptions.

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

4. Install the packages that are necessary to run the project by using:

```bash
npm i
```

- If you are using VS Code and would like to inspect or view the Better-SQLite3 databse, you will need to install the [SQLite Explorer](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) extension.

5. Once the packages are installed you can get it up and running using:
   
```bash
npm run dev
```

6. Open the browser of your choice and navigate to [localhost:1776](http://localhost:1776/), the landing page for Hairy Antler Distillery will load.


## Project Features

