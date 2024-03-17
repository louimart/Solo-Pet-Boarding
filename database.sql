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
    "bortella" BOOLEAN DEFAULT FALSE,
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