const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const answer1 = 'test1';
const answer2 = 'test2';
const answer3 = 'test3';
const app = express();
app.use(cors({ origin: true }));
app.post('/', (req, res) => {
    if(
        req.body.answer1 == answer1
        && req.body.answer2 == answer2
        && req.body.answer3 == answer3
    ) {
        res.send({
          message: "Stai tavo hintas.",
          success: true
        })
    } else {
        res.send({
          message: "Kask giliau.",
          success: false
        })
    }
});

exports.hints = functions.https.onRequest(app);
