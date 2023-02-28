// EVENT HANDLERS
function handleImgClick(event) {
    let imgClick = event.target.title;

    for (let i = 0; i < productArray.length; i++) {
        if (imgClick === productArray[i].name) {
            productArray[i].votes++;
        }
    }

    votingRounds--;

    renderImg();

    if (votingRounds === 0) {
        imgContainer.removeEventListener('click', handleImgClick);

        // LOCAL STORAGE STARTS HERE
        let stringifiedProducts = JSON.stringify(productArray);

        console.log('Stringified Products >>> ', stringifiedProducts);

        localStorage.setItem('myProducts', stringifiedProducts);
    }
}

function handleShowResults() {
    if (votingRounds === 0) {
        renderChart();

        resultsBtn.removeEventListener('click', handleShowResults);
    }
}

votingRounds--;

renderOption();

if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleImgClick);

    // LOCAL STORAGE STARTS HERE
    let stringifiedProducts = JSON.stringify(productArray);

    console.log('Stringified Products >>> ', stringifiedProducts);

    localStorage.setItem('myProducts', stringifiedProducts);
}


if (pickedOption) {
    for (let i = 0; i < parsedOption.length; i++) {
        if (parsedOption[i].name === 'option1') {
            optionArray.push(option1);
        } else if (parsedOption[i].name === 'option2') {
            productArray.push(option2);
        } else (parsedOption[i].name === 'option3') {
            productArray.push(option3);

            //     let reconstructedSweep = new Product(parsedProducts[i].name, 'png');
            //     reconstructedSweep.views = parsedProducts[i].views;
            //     reconstructedSweep.votes = parsedProducts[i].votes;
            //     productArray.push(reconstructedSweep);
            //   } else {
            //       let reconstructedProduct = new Product(parsedProducts[i].name);
            //       reconstructedProduct.views = parsedProducts[i].views;
            //       reconstructedProduct.votes = parsedProducts[i].votes;
            //       productArray.push(reconstructedProduct);
        }
    }

    optionArray.push(option1, option2, option3)
}

console.log(optionArray)

imgContainer.addEventListener('click', handleImgClick);
resultsBtn.addEventListener('click', handleShowResults);