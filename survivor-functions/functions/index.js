const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const question1Answers = ['survivor:guatemala', 'guatemala', 'išlikimas:gvatemala', 'gvatemala', 'S11'];
const question2Answers = ['rimasvaleikis'];
const question3Answers = ['13', 'trylika']
const app = express();
app.use(cors({ origin: true }));
app.post('/', (req, res) => {
    var answer1 = prepareAnswer(req.body.answer1);
    var answer2 = prepareAnswer(req.body.answer2);
    var answer3 = prepareAnswer(req.body.answer3);
    if(
        checkAnswer(answer1, question1Answers) &&
        checkAnswer(answer2, question2Answers) &&
        checkAnswer(answer3, question3Answers)
    ) {
        res.send({
          message: "Štai tavo hintas.",
          success: true
        })
    } else {
        res.send({
          message: "Kask giliau.",
          success: false
        })
    }
});

function prepareAnswer(input) {
  return input.replace(/ +/g, "").toLowerCase();
}

function checkAnswer(answer, correctAnswers) {
  return correctAnswers.indexOf(answer) >= 0;
}

exports.hints = functions.https.onRequest(app);
