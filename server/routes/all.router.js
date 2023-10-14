const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("/collection GET route");
    console.log("is authenticated?", req.isAuthenticated());
    console.log("user", req.user);

    let queryText = `SELECT "collection"."id" as "id", "kanji", "study_notes", "status"
      FROM "collection"
      JOIN "user" ON "user"."id"="collection"."user_id"
      JOIN "status" ON "status"."id"="collection"."status_id"
      GROUP BY "collection"."id", "kanji", "study_notes", "status"
      ORDER BY "collection"."id"`;

    pool
      .query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  } // For testing only, can be removed
});

module.exports = router;
