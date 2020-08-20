DROP DATABASE IF EXISTS realestate_tax_db;
CREATE DATABASE realestate_tax_db;




use movie_magic_db;
DROP TABLE IF EXISTS statetax;
CREATE TABLE stateTax(
statename VARCHAR(50) NOT NULL,
propertyTax FLOAT(7,3) NOT NULL,
);

CREATE TABLE countyTax(
countyname VARCHAR (50) NOT NULL,
stateName VARCHAR(50) NOT NULL,
popertyTax FLOAT(7,3) NOT NULL,
);




-- INSERT INTO user(username, password, movie_one, movie_two, movie_three, actor_one, actor_two, actor_three, director_one,director_two, director_three, genre_one, genre_two, genre_three)
-- VALUES("shawnwhy","password","Brazil", "The Big Lebowski", "The Favorite", "Emily Blunt", "Christphe Waltz", "Rami Malek","Terry Gilliam","Alfonso Cuarón","Christopher Nolan","Action","Adventure","Sci-Fi"),
-- ("RAbbit","password","JOJO Rabbit", "The Big Lebowski", "He Got Game", "Denzel Washington", "Milla Jovovitch","Paul Walker", "terrence malick","Terry Gilliam","Jean Renoir","Action","Adventure","Drama"),
-- ("Leni","password","DASBOOT", "TROY", "Olympia", "Brad Pitt", "leslie Howard","Humphrey Bogart", "Orson Welles","Rob Cohn","James Wan","Action","Adventure","Drama"),
-- ("Robertson","password","Avengers", "Antman", "Iron man", "Robert Downey jr", "Scarlett Johansson","Mark Ruffalo", "James Cameron","Christopher Nolan","Guillermo del Toro","Action","Adventure","Drama")
-- >>>>>>> e0e8ee9b1e59f4d32bd26bd8b2e950f77ebc9433
