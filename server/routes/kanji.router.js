const express = require("express");
const pool = require("../modules/pool");
const { default: axios } = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    axios({
      method: "GET",
      url: `https://kanjiapi.dev/v1/kanji/joyo`,
    })
      .then((response) => {
        console.log("get to kanji api success!", response.data);
        res.send(response.data);
      })
      .catch((err) => {
        console.log("get to kanji api error!:", err);
      });
  } else {
    res.sendStatus(403);
  }
});

router.post('/', async (req, res) => {
  const client = await pool.connect();
  
  try {
    const kanjis = req.body.kanji;

      await Promise.all(kanjis.map(kanji => {
          const insertLineItemText =  `INSERT INTO collection ("kanji", "user_id")
          VALUES (
              $1, $2
          )
              ;`;
          const insertLineItemValues = [kanji, req.user.id];
          return client.query(insertLineItemText, insertLineItemValues);
      }));

      await client.query('COMMIT')
      res.sendStatus(201);
  } catch (error) {
      await client.query('ROLLBACK')
      console.log('Error POST /api/kanji', error);
      res.sendStatus(500);
  } finally {
      client.release()
  }
});

router.put("/:kanji", (req, res) => {
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
