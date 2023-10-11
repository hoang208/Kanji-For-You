
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "status" VARCHAR (80) UNIQUE NOT NULL
);

CREATE TABLE "collection" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user" NOT NULL DEFAULT 1,
  "kanji" VARCHAR (80) NOT NULL,
  "status_id" INT REFERENCES "status" NOT NULL,
  "study_notes" VARCHAR (1000) DEFAULT 'No study note available'
);

INSERT INTO "status" ("status") VALUES ('Not Learned'),('Plan to Learn'),('Learning'),('Learned')