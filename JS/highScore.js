'use strict';
//Get data from local storage
const highScore = localStorage.getItem('newAdventurer');

//Parsing the stringified data
let parsedScore = JSON.parse(highScore);

console.log(parsedScore);
//Sort the score from largest to smallest
let sortedScore = parsedScore.sort((a,b)=> b-a);

//calling the table where the data will go
let scoreOutput = document.getElementById('highscore-box');

//creating table Header and appending it to table
let headerRow = document.createElement('tr');
let nameHeader = document.createElement('th');
nameHeader.textContent = 'Name';
let scoreHeader = document.createElement('th');
scoreHeader.textContent = 'Score';
headerRow.appendChild(nameHeader);
headerRow.appendChild(scoreHeader);
scoreOutput.appendChild(headerRow);

//loop through sorted parsed scores and put scores in table
let scorePlayer = function(){
  for(let i = 0; i < sortedScore.length; i++){
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let score = document.createElement('td');
    score.textContent = sortedScore[i].score;
    name.textContent = sortedScore[i].name;
    row.appendChild(name);
    row.appendChild(score);
    scoreOutput.appendChild(row);
  }
};

//calling the high score function
scorePlayer();
