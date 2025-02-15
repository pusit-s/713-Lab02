CREATE TABLE Event (
    id INT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    petsAllowed BOOLEAN NOT NULL,
    organizer VARCHAR(255) NOT NULL
);