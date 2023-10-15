const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const query = `
  SELECT "status"."id" as "id", "status"."status" as "status",  count(*)
  FROM "collection"
  JOIN "user" ON "user"."id"="collection"."user_id"
  JOIN "status" ON "status"."id"="collection"."status_id"
  GROUP BY "status"."id", "status"."status"
  ORDER BY "status"."id"
  ;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

module.exports = router;