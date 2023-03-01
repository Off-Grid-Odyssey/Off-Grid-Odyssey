'use strict'

//******HAVE FUNCTIONAL BY THURSDAY TO PRE-PRESENT TO AUDREY */

// EVENT HANDLERS
//TODOS FOR TUESDAY
//TODO 3-5 OPTIONS TO PICK FROM WITH 3 ITERATIONS
//TODO 3-5 BUTTONS PER ITERATION
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
let story1 = document.getElementById('story1');
let story2 = document.getElementById('story2');
let story3 = document.getElementById('story3');
let optionOne = document.getElementById('optionOne');
let optionTwo = document.getElementById('optionTwo');
let optionThree = document.getElementById('optionThree');

//*******Arrays( Place Elements inside Array to remove them))********
let storyArray = [];
storyArray.push(story1, story2, story3);
console.log(storyArray);

let optionArray = [];
optionArray.push(optionOne, optionTwo, optionThree);

//*******Remover Functions********
function invisibleOptions(){
  for (let i = 0; i < optionArray.length; i++){
    optionArray[i].remove();
  }
}

function invisibleStorys(){
  for(let i = 0; i < storyArray.length; i++){
    storyArray[i].remove();
  }
}


//**********Handler Functions***********
function handleButtonClick(event) {
  storyArray.push(story);
  invisibleStorys();
  console.log(storyArray);
  console.log(event.target);
  console.log(buttonOption[0]);
  console.log(story1);
  if (event.target === buttonOption[0]){
    introSection.appendChild(story1);
  } else if (event.target === buttonOption[1]){
    introSection.appendChild(story2);
  } else if (event.target === buttonOption[2]){
    introSection.appendChild(story3);
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