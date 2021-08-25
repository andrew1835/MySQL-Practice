DROP DATABASE IF EXISTS moviesDB;

CREATE DATABASE moviesDB;

USE moviesDB;

CREATE TABLE movies(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    PRIMARY KEY (id)
);

INSERT INTO movies (name) VALUES ("La La Land"), ("Blockers"), ("Moulin Rouge"), ("Lord of the Rings"), ("Kill Bill"), ("Coco"), ("Wall-E"), ("Your Name")