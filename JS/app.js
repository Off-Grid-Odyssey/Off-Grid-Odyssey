
'use strict';

// ****************************** GLOBALS ******************************

let adventurerArray = [];
console.log(adventurerArray);
let main = document.querySelector('main');
let playButton = document.getElementById('playButton');
// ******************************** HELPER FUNCTION *************************
//TODO: create playbutton event when clicked.
function handlePlayButton(event) {
  let startPlay = event.target.id;
  window.location.replace('gamePlay.html');
}

let renderButton = function () {
  main.appendChild(playButton);
};

// *********************** CONSTRUCTOR FUNCTION ****************
//TODO: Create new Adventurer constructor function
function Adventurer(name, sex, startingLocation) {
  this.name = name;
  this.sex = sex;
  this.startingLocation = startingLocation;
  this.score = 0;
  this.credits = 500;
}
// ******************** FORM AND EVENT LISTENER ***************************
playButton.remove();

let adventurerForm = document.getElementById('adventurerForm');

// TODO: Create handle form submit function
function handleFormSubmit(event) {
  event.preventDefault();

  console.log(adventurerForm);

  // TODO: Create new Adventurer
  let name = event.target.name.value;
  let sex = event.target.sex.value;
  let startingLocation = event.target.startingLocation.value;


  if (name !== null) {
    
    renderButton();
    adventurerForm.remove();
  }


  // Todo: Place new Adventurer into Local Storage
  let newAdventurer = new Adventurer(name, sex, startingLocation);
  adventurerArray.unshift(newAdventurer);


  if(localStorage.getItem('newAdventurer')){
    let parsedUsers = JSON.parse(localStorage.getItem('newAdventurer'));
    adventurerArray = parsedUsers;
    adventurerArray.unshift(newAdventurer);
    let stringifiedAventurer = JSON.stringify(adventurerArray);
    console.log(stringifiedAventurer);
    localStorage.setItem('newAdventurer', stringifiedAventurer);
  } else {
    adventurerArray.unshift(newAdventurer);
    let stringifiedAventurer = JSON.stringify(adventurerArray);
    console.log(stringifiedAventurer);
    localStorage.setItem('newAdventurer', stringifiedAventurer);
  }
}

// ******************************** OBJECT LITERALS ******************************








//! Executable Code

adventurerForm.addEventListener('submit', handleFormSubmit);
playButton.addEventListener('click', handlePlayButton);
