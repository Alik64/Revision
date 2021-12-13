-- creates a table called helloworld with one column in the table called phrase.
-- The phrase column holds data of type TEXT, 
-- which basically means you can store text in it, as opposed to numbers, boolean values, etc.
CREATE TABLE helloworld (phrase TEXT);
-- We use the .tables sqlite statement to show the list of tables.
.tables
-- Inserting data into a table
CREATE TABLE helloworld (phrase TEXT);
INSERT INTO helloworld VALUES ("Hello, World!");
INSERT INTO helloworld VALUES ("Goodbye, World!");
SELECT COUNT(*) FROM helloworld; -- 2
SELECT * FROM helloworld WHERE phrase = "Hello, World!"; -- 1