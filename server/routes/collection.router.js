const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/:kanji", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("/collection GET route");
    console.log("is authenticated?", req.isAuthenticated());
    console.log("user", req.user);

    let queryText = `SELECT * FROM "collection" WHERE "user_id" = $1 AND "kanji" = $2`;

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

module.exports = router;
