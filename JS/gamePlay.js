'use strict'

// EVENT HANDLERS
function handleImgClick(event) {
    let imgClick = event.target.title;

    for(let i = 0; i < optionArray.length; i++) {
        if(imgClick === optionArray[i].name) {
            optionArray[i].votes++;
        }
    }

    votingRounds--;

    renderImg();

    if (votingRounds === 0) {
        imgContainer.removeEventListener('click', handleImgClick);

        // LOCAL STORAGE STARTS HERE
        let stringifiedOption = JSON.stringify(optionArray);

        console.log('Stringified Option >>> ', stringifiedOption);

        localStorage.setItem('myOption', stringifiedOption);
    }
}
// HANDLE RESULTS
function handleShowResults() {
    if (votingRounds === 0) {
        renderChart();

        resultsBtn.removeEventListener('click', handleShowResults);
    }
}

votingRounds--;

renderOption();

        // LOCAL STORAGE STARTS HERE
        let stringifiedOption = JSON.stringify(optionArray);

        console.log('Stringified Option >>> ', stringifiedOption);

        localStorage.setItem('myOption', stringifiedOption);
    }
    
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

    optionArray.push(option1, option2, option3)
}

console.log(optionArray)

imgContainer.addEventListener('click', handleImgClick);
resultsBtn.addEventListener('click', handleShowResults);