"use strict";

const Database = require('better-sqlite3');

// Open database or create if it does not exist
const db = new Database('products.db');

// Create a products table in the database if it doesn't already exist
db.prepare(`
        CREATE TABLE IF NOT EXISTS products (
            product_id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_img TEXT NOT NULL,
            product_name TEXT NOT NULL,
            product_blurb TEXT NOT NULL,
            product_description TEXT NOT NULL,
            product_price DECIMAL (10, 2),
            product_stock INTEGER,
            IsActive INTEGER
        );
`).run();

console.log('Database and table created!');

// Insert sample data into the database
const insert = db.prepare(`
    INSERT INTO products (product_img, product_name, product_blurb, product_description, product_price, product_stock, IsActive)
    VALUES (?, ?, ?, ?, ?, ?, ?)
`);

// Still needs links to bottle images and longer product descriptions for each product here!
insert.run('./img/hairy-antler-vodka.png', 'Kentucky Original Sorghum Vodka', 'Crafted from 100% Kentucky-grown sorghum, this smooth and versatile vodka brings the essence of Kentucky terroir into every sip.', 'Our Sorghum Vodka is a true representation of Kentucky\'s agricultural legacy, distilled from 100% locally sourced sorghum. This unique grain gives the vodka a smooth, clean profile, with a subtle sweetness and a rich, earthy finish. Perfect for sipping on its own or as the base for a cocktail, our Sorghum Vodka honors Kentucky\'s heritage while offering a modern twist. It\'s an exceptional expression of local ingredients and craftsmanship, with a distinctively smooth character that stands out in the vodka world.', 35.99, 750, 1); // true is 1
insert.run('./img/hairy-antler-gin.png', 'Kentucky Foraged Off Trail Gin', 'Distilled using wild-foraged botanicals and our signature Sorghum Vodka, this gin offers a bold, refreshing, and distinctly Kentucky twist on a classic spirit.', 'Our Sorghum-Based Gin starts with the same high-quality Sorghum Vodka as its base, then infuses it with a carefully curated selection of wild-foraged botanicals native to Kentucky. The result is a gin that celebrates the wild beauty of the region, with aromatic notes of pine, citrus, and herbal undertones. The use of sorghum gives this gin a smooth, slightly sweet foundation that perfectly complements the bright, earthy flavors of the botanicals. Ideal for classic cocktails like a gin and tonic or a Negroni, it brings a Kentucky spirit to every glass.', 35.99, 750, 1); // true is 1
insert.run('./img/hairy-antler-demon-leaper.png', 'Demon Leaper Herbal Liqueur', 'Aged for five years in American oak barrels, this herbal liqueur, made from wild-foraged botanicals, offers a bold, rich flavor with deep layers of complexity.', 'Our Herbal Liqueur is a Kentucky take on the classic Chartreuse, offering a distinctive and complex flavor profile. Infused with wild-foraged herbs and botanicals from the Kentucky wilderness, this liqueur is aged for five years in American oak barrels to deepen its richness and create a smooth, well-rounded finish. The aging process imparts subtle notes of oak and vanilla, balancing the herbal intensity with a touch of warmth. It\'s perfect on its own as a sipper or used as an intriguing ingredient in cocktails, delivering a bold, herbal punch that embodies the spirit of Kentucky.', 65.99, 450, 1); // true is 1
insert.run('./img/hairy-antler-rye.png', 'Kentucky Straight Rye Whiskey', 'Aged for 3 years in American Oak barrels, this 100% Kentucky Straight Rye Whiskey showcases bold spices and smooth oak flavors with a warm, lingering finish.', 'Our 100% Kentucky Straight Rye Whiskey is a bold, flavorful spirit that embodies the rugged character of the region. Aged for three years in American oak barrels, it boasts a deep amber color and a rich, spicy flavor profile that\'s complemented by hints of caramel, vanilla, and toasted oak. The rye\'s natural spiciness comes forward with each sip, leaving a warm, lingering finish that makes this whiskey a perfect choice for sipping neat or mixing into your favorite cocktail. It\'s a true Kentucky rye, crafted with care and steeped in tradition.', 75.99, 750, 1); // true is 1
insert.run('./img/hairy-antler-bourbon.png', 'Kentucky Straight Bourbon Whiskey', 'This seven-year-aged Kentucky Straight Bourbon Whiskey offers rich, full-bodied flavors of caramel, vanilla, and oak, with a smooth, well-balanced finish.', 'Our Kentucky Straight Bourbon Whiskey is aged for seven years in American oak barrels, allowing the rich flavors of caramel, vanilla, and toasted oak to fully develop. The result is a bourbon that is smooth, full-bodied, and beautifully balanced, with just the right amount of sweetness from the corn and a slight spice from the rye. Its deep amber color and robust flavor profile make it a standout choice for any whiskey enthusiast. Whether enjoyed neat, on the rocks, or in a classic bourbon cocktail, this bourbon offers an authentic taste of one of Kentucky\'s finest traditions.', 85.99, 750, 1); // true is 1

console.log('Sample data inserted!');