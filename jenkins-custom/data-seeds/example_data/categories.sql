--
-- PostgreSQL database dump
--

SET search_path = public, pg_catalog;

TRUNCATE TABLE categories;
BEGIN;
INSERT INTO categories (categoryid, categoryname, description, picture) VALUES (1, 'Beverages', 'Soft drinks, coffees, teas, beers, and ales', NULL);
INSERT INTO categories (categoryid, categoryname, description, picture) VALUES (2, 'Condiments', 'Sweet and savory sauces, relishes, spreads, and seasonings', NULL);
INSERT INTO categories (categoryid, categoryname, description, picture) VALUES (3, 'Confections', 'Desserts, candies, and sweet breads', NULL);
INSERT INTO categories (categoryid, categoryname, description, picture) VALUES (4, 'Dairy Products', 'Cheeses', NULL);
INSERT INTO categories (categoryid, categoryname, description, picture) VALUES (5, 'Grains/Cereals', 'Breads, crackers, pasta, and cereal', NULL);
INSERT INTO categories (categoryid, categoryname, description, picture) VALUES (6, 'Meat/Poultry', 'Prepared meats', NULL);
INSERT INTO categories (categoryid, categoryname, description, picture) VALUES (7, 'Produce', 'Dried fruit and bean curd', NULL);
INSERT INTO categories (categoryid, categoryname, description, picture) VALUES (8, 'Seafood', 'Seaweed and fish', NULL);
COMMIT;

