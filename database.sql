-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (20) NOT NULL,
    "last_name" VARCHAR (20) NOT NULL,
    "email" VARCHAR (50) NOT NULL,
    "phone" VARCHAR (20) NOT NULL,
    "street" VARCHAR (50) NOT NULL,
    "city" VARCHAR (25) NOT NULL,
    "state" VARCHAR (25) NOT NULL,
    "user_type" VARCHAR (25) NOT NULL
);

CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY,
    "dog" BOOLEAN DEFAULT FALSE,
    "cat" BOOLEAN DEFAULT FALSE,
    "pet_name" VARCHAR (25) NOT NULL,
    "breed" VARCHAR (25) NOT NULL,
    "age" INT NOT NULL,
    "weight" INT NOT NULL,
    "detail" VARCHAR (500) NOT NULL,
    "vaccine a" BOOLEAN DEFAULT FALSE,
    "vaccine b" BOOLEAN DEFAULT FALSE,
    "vaccine c" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "vaccine" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (25) NOT NULL,
	"is_dog" BOOLEAN,
	"is_cat" BOOLEAN
);

CREATE TABLE "user_pets" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "pet_id" INT REFERENCES "pet"
);

CREATE TABLE "pet_boarding" (
	"id" SERIAL PRIMARY KEY,
	"request_id" INT REFERENCES "request_boarding",
	"user_id" INT REFERENCES "user",
	"pet_id" INT NOT NULL
);

CREATE TABLE "request_boarding" (
	"id" SERIAL PRIMARY KEY,
	"start_date" DATE NOT NULL,
	"end_date" DATE NOT NULL,
	"pickup" BOOLEAN DEFAULT FALSE,
	"dropoff" BOOLEAN DEFAULT FALSE,
	"details" VARCHAR (500) NOT NULL,
	"fee" INT NOT NULL
	);

CREATE TABLE "reviews" (
	"id" SERIAL PRIMARY KEY,
	"boarding_id" INT NOT NULL,
	"star_rating" INT,
	"comments" VARCHAR (500) NOT NULL
);

CREATE TABLE "request_meet" (
	"id" SERIAL PRIMARY KEY,
	"dog" BOOLEAN DEFAULT FALSE NOT NULL,
	"cat" BOOLEAN DEFAULT FALSE NOT NULL,
	"first_name" VARCHAR (20) NOT NULL,
	"last_name" VARCHAR (20) NOT NULL,
	"email" VARCHAR (50) NOT NULL,
	"phone" VARCHAR (20) NOT NULL,
	"details" VARCHAR (500) NOT NULL,
	"confirmation" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "payments" (
	"id" SERIAL PRIMARY KEY,
	"boarding_id" INT NOT NULL,
	"client_id" INT NOT NULL,
	"fee" INT NOT NULL,
	"outstanding" BOOLEAN DEFAULT TRUE
);

INSERT INTO "user" ("username", "password", "first_name", "last_name", "email", "phone_number", "street", "city", "state")
VALUES
('doglover', 'iheartdog123', 'mary', 'smith', 'msmith@gmail.com', '7631234567', '1234 jolly lane', 'minneapolis', 'mn'),
('catlover', 'iheartcat123', 'john', 'smith', 'jsmith@gmail.com', '6121234567', '1234 maple lane', 'minneapolis', 'mn'),
('loverofanimals', 'iheartAnimals123', 'joe', 'jones', 'jjones@gmail.com', '7631238901', '4567 jolly lane', 'minneapolis', 'mn')
;

INSERT INTO "pet" ("dog", "cat", "pet_name", "age", "weight", "detail", "rabies", "bordetella", "distemper")
VALUES
(TRUE, FALSE, 'bailey', 7, 15, 'needs to go on walk to poop and likes to sleep in his own bed', TRUE, TRUE, TRUE),
(FALSE, TRUE, 'sina', 10, 15, 'half can of wet food twice a day. shot once a day', TRUE, TRUE, TRUE)
;

DROP TABLE "user";
DROP TABLE "pet";
DROP TABLE "user_pets";
DROP TABLE "vaccine";
DROP TABLE "pet_boarding";
DROP TABLE "request_boarding";
DROP TABLE "request_meet";
DROP TABLE "reviews";
DROP TABLE "payments";

DROP TABLE "user", "pet", "user_pets", "vaccine", "pet_boarding", "request_boarding", "request_meet", "reviews", "payments";

INSERT INTO "pet" ("dog", "cat", "pet_name", "age", "weight", "detail", "rabies", "bordetella", "distemper")
VALUES
(TRUE, FALSE, 'bailey', 7, 15, 'needs to go on walk to poop and likes to sleep in his own bed', TRUE, TRUE, TRUE),
(FALSE, TRUE, 'sina', 10, 15, 'half can of wet food twice a day. shot once a day', TRUE, TRUE, TRUE)
;