'use strict';

let playButton = document.getElementById('playButton');
function handlePlayButton(event){
  let startPlay = event.target.id;

  window.location.replace('gamePlay.html');

}

playButton.addEventListener('click', handlePlayButton);
