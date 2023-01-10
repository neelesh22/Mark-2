var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Aniket",
    score: 3,
  },

  {
    name: "Rahul",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
  answer: "Bane"
}, {
  question: "What were the names of Bruce Wayne's parents?",
  answer: "Thomas and Martha Wayne"
},
{
  question: "Who is credited with creating Batman?",
  answer: "Bob Kane"
}, {
  question: "What Batman villain formerly worked as a zoologist?",
  answer: "ManBat"
}, {
  question: "What year was the character of Robin first introduced?",
  answer: "1940"
}, {
  question: "The original Batgirl was related to what familiar Batman character?",
  answer: "Batwoman"
},];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to Batman quiz");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();