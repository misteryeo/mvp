CREATE DATABASE icebreaker;

USE icebreaker;

CREATE TABLE convolines (
  id INTEGER NOT NULL AUTO_INCREMENT,
  category VARCHAR(50) NOT NULL,
  oneline VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
)


