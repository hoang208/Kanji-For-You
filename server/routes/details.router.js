const express = require("express");
const pool = require("../modules/pool");
const { default: axios } = require("axios");
const router = express.Router();

router.get("/:kanji", (req, res) => {
  let kanji = req.params["kanji"];
  const url = `https://kanjiapi.dev/v1/kanji/${kanji}`;
  const encodedURI = encodeURI(url);
  console.log("kanji", kanji);
  if (req.isAuthenticated()) {
    axios({
      method: "GET",
      url: `${encodedURI}`,
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

module.exports = router;
