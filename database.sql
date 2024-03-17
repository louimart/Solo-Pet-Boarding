-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    "first_name" VARCHAR (20) NOT NULL,
    "last_name" VARCHAR (20) NOT NULL,
    "email" VARCHAR (50) NOT NULL,
    "phone_number" VARCHAR (20) NOT NULL,
    "street" VARCHAR (50) NOT NULL,
    "city" VARCHAR (25) NOT NULL,
    "state" VARCHAR (25) NOT NULL
);

DROP TABLE "user";

CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY,
    "dog" BOOLEAN DEFAULT FALSE,
    "cat" BOOLEAN DEFAULT FALSE,
    "pet_name" VARCHAR (25) NOT NULL,
    "age" INT NOT NULL,
    "weight" INT NOT NULL,
    "detail" VARCHAR (500) NOT NULL,
    "rabies" BOOLEAN DEFAULT FALSE,
    "bordetella" BOOLEAN DEFAULT FALSE,
    "distemper" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "user_pets" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "pet_id" INT REFERENCES "pet"
);

CREATE TABLE "request_meet" (
    "id" SERIAL PRIMARY KEY,
    "dog" BOOLEAN DEFAULT FALSE.
    "cat" BOOLEAN DEFAULT FALSE,
    "first_name" VARCHAR (20) NOT NULL,
    "last_name" VARCHAR (20) NOT NULL,
    "pet_name" VARCHAR (20) NOT NULL,
    "email" VARCHAR (50) NOT NULL,
    "phone_number" VARCHAR (20) NOT NULL,
    "details" VARCHAR (500) NOT NULL,
    "confirmed" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "payments" (
    "id" SERIAL PRIMARY KEY,
    "boarding_id" INT REFERENCES "request_boarding",
    "user_id" INT REFERENCES "request_boarding",
    "fee" INT REFERENCES "request_boarding",
    "outstanding" BOOLEAN DEFAULT TRUE
);

CREATE TABLE "request_boarding" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES _____,
    "pet_1" VARCHAR (25) REFERENCES "pet",
    "pet_2" VARCHAR (25) REFERENCES "pet",
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "pickup" BOOLEAN DEFAULT FALSE,
    "dropoff" BOOLEAN DEFAULT FALSE,
    "details" VARCHAR (500) NOT NULL,
    "fee" INT NOT NULL
);

CREATE TABLE "reviews" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "request_boarding",
    "pet_id" INT REFERENCES "pet",
    "boarding_id" INT REFERENCES "request_booking",
    "stars" INT NOT NULL,
    "comments" VARCHAR (500) NOT NULL
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