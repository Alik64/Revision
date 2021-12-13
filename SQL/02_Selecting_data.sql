-- Write a SELECT query which selects all students from the students table 
-- who received a grade of more than 80. Return only the name of the student.

CREATE TABLE students (name text, grade int);
INSERT INTO students VALUES ("Eric", 83);
INSERT INTO students VALUES ("John", 78);
INSERT INTO students VALUES ("Andrew", 91);
INSERT INTO students VALUES ("Jessica", 95);
INSERT INTO students VALUES ("Chris", 79);

-- ANSWER

SELECT name from students WHERE grade > 80;