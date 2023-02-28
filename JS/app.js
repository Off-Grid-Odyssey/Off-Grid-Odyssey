
'use strict';

// ****************************** GLOBALS ******************************

let adventurerArray = [];

// ******************************** HELPER FUNCTION *************************
//TODO: create playbutton event when clicked.
function handlePlayButton(event) {
  let startPlay = event.target.id;
  window.location.replace('gamePlay.html');
}

// ********************************** CONSTRUCTOR FUNCTION ***********************
//TODO: Create new Adventurer constructor function
function Adventurer(name, sex, startingLocation) {
  this.name = name;
  this.sex = sex;
  this.startingLocation = startingLocation;
  this.score = 0;
  this.highScore = 0;
}
// ******************************* FORM AND EVENT LISTENER ***************************
let playButton = document.getElementById('playButton');

playButton.remove();

let adventurerForm = document.getElementById('adventurerForm');

// TODO: Create handle form submit function
function handleFormSubmit(event) {
  event.preventDefault();

  console.log(adventurerForm);

  // TODO: Create new Adventurer
  const name = event.target.name.value;
  // console.log(name);
  const sex = event.target.sex.value;
  // console.log(sex);
  const startingLocation = event.target.startingLocation.value;
  // console.log(startingLocation);

  if(name !== null){
    adventurerForm.appendChild(playButton);
  }


  // Todo: Place new Adventurer into Local Storage
  let newAdventurer = new Adventurer(name, sex, startingLocation);
  adventurerArray.unshift(newAdventurer);

  let stringifiedAventurer = JSON.stringify(adventurerArray);
  console.log(stringifiedAventurer);

  localStorage.setItem('newAdventurer', stringifiedAventurer);
}

// ******************************** OBJECT LITERALS ******************************










//! Executable Code

adventurerForm.addEventListener('submit', handleFormSubmit);
playButton.addEventListener('click', handlePlayButton);
