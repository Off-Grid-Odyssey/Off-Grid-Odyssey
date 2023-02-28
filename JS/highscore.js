//Get data from local storage
let highScore = localStorage.getItem('scoreArray');

//Parsing the stringified data
let parsedScore = JSON.parse(highScore);

//calling the table where the data will go
let scoreOutput = document.getElementById('highscore-box');










//Compare new data and put it in order from greatest to least

if (highScore){
  for(let i = 0; i < parsedScore.length; i++){
    if(parsedScore[i].name < new Score){
      parsedScore.splice[i];
    }
  }else{
    //rerender table
  }
}




// // Read data
// const car = localStorage.getItem('myCar');

// // Remove specific data
// localStorage.removeItem('myCar');

// localStorage.clear();
// 3. Create a function to retrieve the high scores from local storage.  
// 4. Create a function to sort the high scores in descending order.  
// 5. Create a function to display the high scores in a table.  
// 6. Create an event listener to call the functions when the page loads.
