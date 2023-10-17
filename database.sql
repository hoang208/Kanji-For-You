-- MUST SET DATABASE ENCODING TO UTF-8 OR SOMETHING THAT SUPPORTS JAPANESE LANGUAGE
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
  "user_id" INT REFERENCES "user" NOT NULL,
  "kanji" VARCHAR (80) NOT NULL,
  "status_id" INT REFERENCES "status" NOT NULL　DEFAULT 1,
  "study_notes" VARCHAR (1000) DEFAULT '',
  UNIQUE ("user_id", "kanji")
);

INSERT INTO "status" ("status") VALUES ('Not Learned'),('Plan to Learn'),('Learning'),('Learned');
