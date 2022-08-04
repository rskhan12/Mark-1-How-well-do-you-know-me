var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question(" Please enter your name. ");
console.log(" Welcome, " + userName + "!");

console.log(" This is fun quiz to see 'How well do you know Ruheena.'");

console.log("------------------------------------------------------")

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(" You were right! ");
    score = score + 1;
  } else {
    console.log(" You were wrong! ");
    score = score - 1;
    console.log(" Current score :" + score)
  }
  console.log("-------------------------------------------------")
}

play(" Where do I live? ", "Maharashtra");

play(" What is my favourite ice-cream flavour? ", "Butterscotch");

play(" Guess my favourite sports? ", "Badminton");

play(" What is my favourite colour? ", "Sky blue");

play(" Guess is my favourite food? ", "Biryani")

console.log(" Your final score is : " + score)
