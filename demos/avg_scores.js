"use strict";
//create an array of numbers to store test scores
//create a myScores variable
//assign the array into the my scores as a parameter
let myScores = [92, 98, 84, 76, 89, 99, 100];
//define a variable named total and assign it an inital value of 0 
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total +=scores[i];
  }
  return total / scores.length;
}

let myAverage =getAverage(myScores);
console.log("My average score is:" + myAverage);