const express = require('express');
const pool = require('../modules/pool');
const { default: axios } = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    axios({
        method: "GET",
        url: `https://kanjiapi.dev/v1/kanji/joyo`
        
    })
        .then((response) => {
            console.log("get to kanji api success!", response.data);
            res.send(response.data);
        })
        .catch((err) => {
            console.log("get to kanji api error!:", err)
        })
})

module.exports = router;