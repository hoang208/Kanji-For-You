const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/:kanji", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("/collection GET route");
    console.log("is authenticated?", req.isAuthenticated());
    console.log("user", req.user);

    // Gets study notes and status for this particular kanji
    let queryText = `SELECT "kanji", "study_notes", "status"
    FROM "collection"
    JOIN "user" ON "user"."id"="collection"."user_id"
    JOIN "status" ON "status"."id"="collection"."status_id"
    WHERE "user_id" = $1 AND "kanji" = $2
    GROUP BY "kanji",  "study_notes", "status"`;

    pool
      .query(queryText, [req.user.id, req.params.kanji])
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

router.put("/:kanji", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("/collection put route");
    console.log(req.params.kanji);
    console.log("is authenticated?", req.isAuthenticated());
    console.log("user", req.user);
    console.log(req.body.status_id);

    let queryText = `UPDATE "collection" SET "status_id" = $1 WHERE "kanji" = $2 AND "user_id"= $3`;

    pool
      .query(queryText, [req.body.status_id, req.params.kanji, req.user.id])
      .then((result) => {
        console.log("query successful", queryText);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
  // endpoint functionality
});

router.delete("/:kanji", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("/kanji put route");
    console.log(req.params.kanji);
    console.log("is authenticated?", req.isAuthenticated());
    console.log("user", req.user);
    console.log(req.body.notes);

    let queryText = `UPDATE "collection" SET "study_notes" = $1 WHERE "kanji" = $2 AND "user_id"= $3`;

    pool
      .query(queryText, [req.body.notes, req.params.kanji, req.user.id])
      .then((result) => {
        console.log("query successful", queryText);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
  // endpoint functionality
});

module.exports = router;
