'use strict'

//******HAVE FUNCTIONAL BY THURSDAY TO PRE-PRESENT TO AUDREY */

// EVENT HANDLERS
//TODOS FOR TUESDAY
//TODO 3 OPTIONS TO PICK FROM WITH 3 ITERATIONS
//TODO 3 BUTTONS PER ITERATION
//TODO IF ELSE STATEMENTS FOR OPTIONS/BUTTONS
//TODO WHILE LOOP THAT ENDS THE GAME AND POPULATE SCORE/HIGH SCORE/WHATEVER WE WANT
//TODO INITIAL BRANCHES AND ONE STARTING ZONE

//TODOS WEDNESDAY
//TODO PULL CHARACTER DATA FROM LOCAL STORAGE TO GENERATE CHARACTER SPECIFIC TEXT AND PLACE THEM IN THEIR UNIQUE STARTING ZONES
//TODO NEED TO HAVE MULTIPLE DIRECTIONS TO GO TO MOVE FORWARD IN THE STORY(BRANCHES OF THE STORY)



// function handleImgClick(event) {
//     let imgClick = event.target.title;

//     for (let i = 0; i < optionArray.length; i++) {
//         if (imgClick === optionArray[i].name) {
//         }
//     }

//     renderImg();

//     if (points === 0) {
//         imgContainer.removeEventListener('click', handleImgClick);

//         // LOCAL STORAGE STARTS HERE
//         let stringifiedOption = JSON.stringify(optionArray);

//         console.log('Stringified Option >>> ', stringifiedOption);

//         localStorage.setItem('myOption', stringifiedOption);
//     }
// }
// // HANDLE RESULTS OF SCORE
// function handleShowResults() {
//     if (points === 0) {
//         renderChart();

//         resultsBtn.removeEventListener('click', handleShowResults);
//     }
// }

// points--;

//*******Global*********
let buttonContainer = document.getElementsByClassName('buttonContainer');
let buttonOption = document.getElementsByClassName('buttonOption');

let introSection = document.getElementById('introSection');
let story = document.getElementById('story');
let investigateStory = document.getElementById('investigateStory');
let flyStory = document.getElementById('flyStory');
let monitorStory = document.getElementById('monitorStory');
let exploreWreckageStory = document.getElementById('exploreWreckageStory');
let theFootJourneyToSettlementStory = document.getElementById('theFootJourneyToSettlementStory');
let theFootJourneyToMountainStory = document.getElementById('theFootJourneyToMountainStory');
let theTravlerBarterStory = document.getElementById('theTravlerBarterStory');
let theTravlerStory = document.getElementById('theTravlerStory');
let theCrashStory = document.getElementById('theCrashStory');
let theTravlerTradeStory = document.getElementById('theTravlerTradeStory');

let investigateShipWreckOption = document.getElementById('investigateShipWreckOption');
let flyToSettlementOption = document.getElementById('flyToSettlementOption');
let monitorSituationOption = document.getElementById('monitorSituationOption');
let exploreWreckageOption = document.getElementById('exploreWreckageOption');
let exploreSettlementOption = document.getElementById('exploreSettlementOption');
let exploreMountainsOption = document.getElementById('exploreMountainsOption');
let flyCanyonOption = document.getElementById('flyCanyonOption');
let flyThroughOption = document.getElementById('flyThroughOption');
let avoidTravlerOption = document.getElementById('avoidTravlerOption');
let acceptTradeAsIsOption = document.getElementById('acceptTradeAsIsOption');
let barterOption = document.getElementById('barterOption');
let theTownStory = document.getElementById('theTownStory');
let approachTravlerOption = document.getElementById('approachTravlerOption');


//*******Arrays( Place Elements inside Array to remove them))********
let storyArray = [];
storyArray.push(investigateStory, flyStory, monitorStory, exploreWreckageStory, theFootJourneyToSettlementStory, theFootJourneyToMountainStory, theCrashStory, theTravlerStory, theTravlerBarterStory, theTravlerTradeStory);
console.log(storyArray);

let optionArray = [];
optionArray.push(investigateShipWreckOption, flyToSettlementOption, monitorSituationOption, exploreWreckageOption, exploreSettlementOption, exploreMountainsOption, flyCanyonOption, flyThroughOption, avoidTravlerOption, acceptTradeAsIsOption, barterOption);


//*******Remover Functions********
function invisibleOptions() {
  for (let i = 0; i < optionArray.length; i++) {
    optionArray[i].remove();
  }
}

function invisibleStorys() {
  for (let i = 0; i < storyArray.length; i++) {
    storyArray[i].remove();
  }
}


// ******************************** OBJECTS *******************************

let scenario = {
  one: {
    investigateStory,
    exploreWreckageOption,
    exploreSettlementOption,
    exploreMountainsOption

  },
  // two: {
  //   monitorStory,
  // },
  three: {
    
  },
  four: {
    theFootJourneyToSettlementStory,
    avoidTravlerOption,
    approachTravlerOption,
  },
  five: {

  }
};

let scenario2 = {
  one: {flyStory},
  two: {flyThroughOption},
  three: {flyCanyonOption},
};



//**********Handler Functions***********
function handleButtonClick(event) {
  storyArray.push(story);
  invisibleStorys();
  console.log(storyArray);
  console.log(event.target);
  console.log(buttonOption[0]);
  // console.log(story1);
  if (event.target === buttonOption[0]) {
    introSection.appendChild(investigateStory);
  } else if (event.target === buttonOption[1]) {
    introSection.appendChild(flyStory);
  } else if (event.target === buttonOption[2]) {
    introSection.appendChild(monitorStory);
  }

  invisibleOptions();
}

// LOCAL STORAGE STARTS HERE
let stringifiedOption = JSON.stringify(optionArray);

console.log('Stringified Option >>> ', stringifiedOption);

localStorage.setItem('myOption', stringifiedOption);


console.log(optionArray);

//*********Executable Code*************
for (let i = 0; i < buttonContainer.length; i++) {
  buttonContainer[i].addEventListener('click', handleButtonClick);
}
invisibleStorys();
// imgContainer.addEventListener('click', handleImgClick);
// resultsBtn.addEventListener('click', handleShowResults);
