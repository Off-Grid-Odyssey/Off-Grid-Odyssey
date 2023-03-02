'use strict';
//Get data from local storage

const highScore = localStorage.getItem('newAdventurer');

//Parsing the stringified data
let parsedScore = JSON.parse(highScore);


console.log(parsedScore);

//Sort the score from largest to smallest
let sortedScore = parsedScore.sort((a,b)=> b-a);

//calling the table where the data will go

let scoreOutput = document.getElementById('highScoreBox');

//creating table Header and appending it to table
let headerRow = document.createElement('tr');
let nameHeader = document.createElement('th');
nameHeader.textContent = 'Name';
let scoreHeader = document.createElement('th');
scoreHeader.textContent = 'Score';
let sexHeader = document.createElement('th');
sexHeader.textContent = 'Sex';
let startingLocationHeader = document.createElement('th');
startingLocationHeader.textContent = 'Planet';
headerRow.appendChild(nameHeader);
headerRow.appendChild(scoreHeader);
headerRow.appendChild(sexHeader);
headerRow.appendChild(startingLocationHeader);
scoreOutput.appendChild(headerRow);

//loop through sorted parsed scores and put scores in table
let scorePlayer = function(){
  for(let i = 0; i < sortedScore.length; i++){
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let score = document.createElement('td');
    let sex = document.createElement('td');
    let startingLocation = document.createElement('td');
    score.textContent = sortedScore[i].score;
    name.textContent = sortedScore[i].name;
    sex.textContent = sortedScore[i].sex;
    startingLocation.textContent = sortedScore[i].startingLocation;
    row.appendChild(name);
    row.appendChild(score);
    row.appendChild(sex);
    row.appendChild(startingLocation);
    scoreOutput.appendChild(row);
  }
};


//calling the highScore function
scorePlayer();
