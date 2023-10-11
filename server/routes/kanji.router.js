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

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('/kanji POST route');
        console.log(req.body);
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);

        let queryText = `INSERT INTO "collection" ("kanji", "user_id")
        VALUES ($1, $2)`;
        pool.query(queryText, [req.body.kanji, req.user.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => res.sendStatus(500));
    } else {
        res.sendStatus(403);
    }
  // endpoint functionality
});

module.exports = router;
