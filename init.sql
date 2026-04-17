CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment_text TEXT NOT NULL
);

INSERT INTO comments (comment_text) VALUES
('Hello DevOps'),
('Docker is cool'),
('It works!');
