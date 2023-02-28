'use strict'

//******HAVE FUNCTIONAL BY THURSDAY TO PRE-PRESENT TO AUDREY */

// EVENT HANDLERS
//TODOS FOR TUESDAY
//TODO 3-5 OPTIONS TO PICK FROM WITH 3 ITERATIONS BY EOD TUESDAY
//TODO 3-5 BUTTONS PER ITERATION
//TODO IF ELSE STATEMENTS FOR OPTIONS/BUTTONS
//TODO WHILE LOOP THAT ENDS THE GAME AND POPULATE SCORE/HIGH SCORE/WHATEVER WE WANT
//TODO INITIAL BRANCHES AND ONE STARTING ZONE

//TODOS WEDNESDAY
//TODO PULL CHARACTER DATA FROM LOCAL STORAGE TO GENERATE CHARACTER SPECIFIC TEXT AND PLACE THEM IN THEIR UNIQUE STARTING ZONES
//TODO NEED TO HAVE MULTIPLE DIRECTIONS TO GO TO MOVE FORWARD IN THE STORY(BRANCHES OF THE STORY)
function handleImgClick(event) {
    let imgClick = event.target.title;

    for(let i = 0; i < optionArray.length; i++) {
        if(imgClick === optionArray[i].name) {
        }
    }

    renderImg();

    if (hitpoints === 0) {
        imgContainer.removeEventListener('click', handleImgClick);

        // LOCAL STORAGE STARTS HERE
        let stringifiedOption = JSON.stringify(optionArray);

        console.log('Stringified Option >>> ', stringifiedOption);

        localStorage.setItem('myOption', stringifiedOption);
    }
}
// HANDLE RESULTS OF SCORE
function handleShowResults() {
    if (hitpoints === 0) {
        renderChart();

        resultsBtn.removeEventListener('click', handleShowResults);
    }
}

hitpoints--;

renderOption();

        // LOCAL STORAGE STARTS HERE
        let stringifiedOption = JSON.stringify(optionArray);

        console.log('Stringified Option >>> ', stringifiedOption);

        localStorage.setItem('myOption', stringifiedOption);
    
//PICKED OPTION
if(pickedOption) {
    for(let i = 0; i < parsedOption.length; i++) {
      if(parsedOption[i].name === 'option1') {
        optionArray.push(option1);
        } else if (parsedOption[i].name === 'option2') {
            optionArray.push(option2);
        } else (parsedOption[i].name === 'option3') {
            productArray.push(option3);
      }
    }

    optionArray.push(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15, option16, option17, option18, option19, option20, option21, option22, option23, option24, option25, option26)
}

console.log(optionArray)

imgContainer.addEventListener('click', handleImgClick);
resultsBtn.addEventListener('click', handleShowResults);