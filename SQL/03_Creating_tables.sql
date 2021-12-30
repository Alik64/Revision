-- Create a table named students with a first_name, a last_name (both text columns) and an age (which should be defined as an integer).

 CREATE TABLE students (
    first_name TEXT,
    last_name TEXT,
    age INT
);

INSERT INTO students (first_name, last_name, age) VALUES ("John", "Doe", 23);  
SELECT * FROM students;