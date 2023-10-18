const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  //Get count of each status for that user
  const query = `
  SELECT "status"."id" as "id", "status"."status" as "status",  count(*)
  FROM "collection"
  JOIN "user" ON "user"."id"="collection"."user_id"
  JOIN "status" ON "status"."id"="collection"."status_id"
  WHERE "user_id" = $1 
  GROUP BY "status"."id", "status"."status"
  ORDER BY "status"."id"
  ;`;

  pool
    .query(query, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

module.exports = router;
