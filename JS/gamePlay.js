'use strict';

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




//*******Global*********
let score = 0;
let text = document.getElementById('text');
let buttonContainer = document.getElementsByClassName('buttonContainer');
console.log(buttonContainer);
let changeButtons = function (buttonList) {
  buttonContainer[0].innerHTML = "";
  for (let i = 0; i < buttonList.length; i++) {
    buttonContainer[0].innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
  }
  score += 10;
  console.log(score);
};
let advanceTo = function (s) {
  changeButtons(s.buttons);
  changeText(s.text);
};
let changeText = function(words) {
  text.innerHTML = words.replace();
};
// let buttonOption = document.getElementsByClassName('buttonOption');


// let introSection = document.getElementById('introSection');
// let story = document.getElementById('story');
// let investigateStory = document.getElementById('investigateStory');
// let flyStory = document.getElementById('flyStory');
// let monitorStory = document.getElementById('monitorStory');
// let exploreWreckageStory = document.getElementById('exploreWreckageStory');
// let theFootJourneyToSettlementStory = document.getElementById('theFootJourneyToSettlementStory');
// let theFootJourneyToMountainStory = document.getElementById('theFootJourneyToMountainStory');
// let theTravlerBarterStory = document.getElementById('theTravlerBarterStory');
// let theTravlerStory = document.getElementById('theTravlerStory');
// let theCrashStory = document.getElementById('theCrashStory');
// let theTravlerTradeStory = document.getElementById('theTravlerTradeStory');

// let investigateShipWreckOption = document.getElementById('investigateShipWreckOption');
// let flyToSettlementOption = document.getElementById('flyToSettlementOption');
// let monitorSituationOption = document.getElementById('monitorSituationOption');
// let exploreWreckageOption = document.getElementById('exploreWreckageOption');
// let exploreSettlementOption = document.getElementById('exploreSettlementOption');
// let exploreMountainsOption = document.getElementById('exploreMountainsOption');
// let flyCanyonOption = document.getElementById('flyCanyonOption');
// let flyThroughOption = document.getElementById('flyThroughOption');
// let avoidTravlerOption = document.getElementById('avoidTravlerOption');
// let acceptTradeAsIsOption = document.getElementById('acceptTradeAsIsOption');
// let barterOption = document.getElementById('barterOption');
// let theTownStory = document.getElementById('theTownStory');
// let approachTravlerOption = document.getElementById('approachTravlerOption');


//*******Arrays( Place Elements inside Array to remove them))********
// let storyArray = [];
// storyArray.push(investigateStory, flyStory, monitorStory, exploreWreckageStory, theFootJourneyToSettlementStory, theFootJourneyToMountainStory, theCrashStory, theTravlerStory, theTravlerBarterStory, theTravlerTradeStory);
// console.log(storyArray);

// let optionArray = [];
// optionArray.push(investigateShipWreckOption, flyToSettlementOption, monitorSituationOption, exploreWreckageOption, exploreSettlementOption, exploreMountainsOption, flyCanyonOption, flyThroughOption, avoidTravlerOption, acceptTradeAsIsOption, barterOption);


//*******Remover Functions********
// function invisibleOptions() {
//   for (let i = 0; i < optionArray.length; i++) {
//     optionArray[i].remove();
//   }
// }

// function invisibleStorys() {
//   for (let i = 0; i < storyArray.length; i++) {
//     storyArray[i].remove();
//   }
// }



// ******************************** OBJECTS *******************************


let scenario = {
  startingStory: {
    text: 'You are Captain [Name], a seasoned explorer and captain of your own spaceship. Your latest mission has brought you to the desolate desert planet of Xirra, where you\'ve picked up a distress signal from a remote settlement. As you approach the planet, you see the wreckage of a ship on the surface below. What will you do, Captain [Name]? The fate of Xirra and your own journey rests in your hands.',
    buttons:
      [['Investigate Shipwreck', 'advanceTo(scenario.investigateCrash)'], ['Fly to Settlement', 'advanceTo(scenario.flyToTown)'], ['Monitor from orbit', 'advanceTo(scenario.monitor)']]
  },

  investigateCrash: {
    text: 'As you land your ship near the wreckage you hear a loud crunching sound and your ship shudders. The landing gear has been damaged, and you won\'t be able to take off until it\'s fixed. From your ship it looks as if there isn\'t much salvageable at the wreckage. you notice there is a mountain range with what looks like signs of civilization, and you remember the original town with the distress signal. you wonder where you could go to get parts to repair your ship.',
    buttons: [['Explore Wreckage', 'advanceTo(scenario.exploreWreckage)'], ['Travel to Mountains', 'advanceTo(scenario.theFootJourneyToMountain)'], ['Travel to Town', 'advanceTo(scenario.theTown)']]
  },
  flyToTown: {
    text: 'You bypass the shipwreck and fly directly to the settlement where the distress signal originated from. However, your ship\'s systems detect an incoming sandstorm in that direction, which could damage your ship and make it difficult to navigate. You\'ll need to be careful and make a decision quickly if you want to reach the settlement before the storm hits. you can either fly straight through the storm risking damage to your flight navigation systems or try flying through the narrow rocky canyon avoiding the storm but you risking crashing into the walls of the canyon. ',
    buttons: [['Fly through storm', 'advanceTo(scenario.flyThroughStorm)'], ['Fly through canyon', 'advanceTo(scenario.flyThroughCanyon)']]
  },

  flyThroughCanyon: {
    text: 'As you rush towards the settlement, you decide to take a risky route through a rocky canyon to avoid the incoming sandstorm. The journey is rough, and you have to navigate through narrow passages, dodging sharp rocks and boulders. Suddenly, you misjudge a turn and crash into the canyon wall, damaging your ship and injuring yourself in the process. Despite the setback, you manage to continue on your journey, but you\'ll need to be more careful in the future, you finish your flight and make it the remainder of the way to the settlement..',
    buttons: [['Continue to Settlement', 'advanceTo(scenario.theLostShip)']]
  },

  flyThroughStorm: {
    text: 'You decide to take a risk and fly through the sandstorm to reach the settlement quickly. As you navigate through the storm, your ship is pelted by sand and debris, causing the systems to malfunction. You struggle to keep the ship airborne as the winds buffet it from all sides.',
    buttons: [['CRASH', 'advanceTo(scenario.theCrash)']]
  },

  monitor: {
    text: 'You stay in orbit and monitor the situation from a safe distance. you notice a large sandstorm near the wreckage and as you observe the wreckage, you can tell that there\'s nothing of value left. It\'s just a pile of twisted metal and debris. However, you notice a small settlement in the distance. It\'s located in a remote part of the planet\'s desert, but it\'s the only sign of life you\'ve seen so far.  You decide to fly directly to the settlement where the distress signal originated from.',
    buttons: [['Fly to Settlement', 'advanceTo(scenario.theLostShip)']]
  },
  exploreWreckage: {
    text: 'As you rummage through the wreckage, you notice a few things of interest: a first aid kit, a toolbox, and 1000 credits. However, your search is suddenly interrupted by the sound of growling coming from nearby. a massive sand creature approaching, and you realize you need to act fast. You don\'t have time to grab any of the items before retreating back to your ship. however you may be able to return and grab the items later. you wait in your ship until the creature retreats back to the wreckage what do you do now? Before you leave ',
    buttons: [['Head Towards Mountains', 'advanceTo(scenario.theFootJourneyToMountain)'], ['Head Towards Settlement', 'advanceTo(scenario.theFootJourneyToSettlement)']]
  },

  theFootJourneyToSettlement: {
    text: 'The journey to the settlement is treacherous and unforgiving. The scorching sun beats down on you relentlessly, and the endless dunes make the going slow and exhausting. Your water supply is running low, and you\'re starting to feel the effects of dehydration. add to this prompt where you encounter a person As you trudge through the endless desert, you catch a glimpse of movement in the distance. As you get closer, you see that it\'s a person, stumbling and swaying as they make their way across the dunes. They look disoriented and dehydrated, much like you feel. Do you approach them and offer assistance, or do you continue on your journey to the settlement unnoticed, knowing that every minute counts? The decision is yours to make.',
    buttons: [['Approach the weary travler', 'advanceTo(scenario.theTravler)'], ['Avoid the weary travler', 'advanceTo(scenario.dieInDesert)']]
  },

  dieInDesert: {
    text: 'As you push on through the scorching desert, your water supply dwindles rapidly. You feel your throat getting drier with every step, and your lips start to crack and bleed. You try to keep moving, but your legs feel heavy and unresponsive, and your head swims with dizziness. You stumble and fall to your knees, gasping for breath. You know you\'re in trouble. You try to get back up, but your strength fails you. You collapse in the sand, your vision fading to black. Your last thought is a desperate hope that someone will find you before it\'s too late. But in this vast, unforgiving desert, the chances of that seem slim. You close your eyes, and everything goes dark.'
  },

  theFootJourneyToMountain: {
    text: 'As you make your way towards the mountains, you notice the terrain getting rougher and more difficult to navigate. The sand gives way to rocks and the occasional patch of sparse vegetation. Suddenly, you hear a strange noise that sounds like a mix between a roar and a screech. You stop in your tracks and scan the surroundings, and soon enough, you spot the source of the sound: a massive creature with thick fur, sharp claws, and glowing eyes. It\'s like nothing you\'ve ever seen before, but one thing is certain - it\'s not friendly. The creature starts charging at you, and you realize you\'ll need to act fast if you want to survive this encounter.',
    // buttons:
  },
  // MountainStoryTwo: {
  //   text: 'The settlement has walls all around with sentries, so they decided it would be okay to give you a plasma pistol before forcing you out of their main gate. As you make your way towards the mountains, you notice the terrain getting rougher and more difficult to navigate. The sand gives way to rocks and the occasional patch of sparse vegetation. Suddenly, you hear a strange noise that sounds like a mix between a roar and a screech. You stop in your tracks and scan the surroundings, and soon enough, you spot the source of the sound: a massive creature with thick fur, sharp claws, and glowing eyes. It\'s like nothing you\'ve ever seen before, but one thing is certain - it\'s not friendly. The creatur starts charging at you, and you realize you\'ll need to act fast if you want to survive this encounter.'
  // },
  theCrash: {
    text: 'As you push your ship to its limits, flying through the sandstorm, you start to lose control. The winds are too strong, and the sand is battering the hull of your ship. Suddenly, you hear a loud crash, and everything goes black. When you come to, you realize that your ship has crashed. The hull is severely damaged, and most of your supplies have been destroyed. You\'re lucky to be alive but now you\'re stranded on this strange planet with no way to contact anyone for help. Time to make your way to the town on foot.',
    buttons: [['head towards the settlement', 'advanceTo(scenario.theTravler)'],]
  },
  theTravler: {
    text: 'You approach the traveler, they turn to face you and smile, relieved to see another person in this harsh environment. They introduce themselves as Ali and explain that they\'re a trader, traveling between settlements to sell goods and supplies. Ali offers to sell you some much-needed water and supplies to help you on your journey, but warns that the prices are steep out here in the desert. You can try to Barter for a lower price or trade for the current price. Barting might anger Ali so be careful',
    buttons: [['Barter with Ali', 'advanceTo(scenario.theTravlerBarterStory)'], ['Trade with Ali', 'advanceTo(scenario.theTravlerTradeStory)']]
  },

  theTravlerBarterStory: {
    text: 'you try to negotiate the price, and after some haggling, he agrees to sell you the food and for a mere 50 credits. You hand over the credits, and Ali hands you the supplies. You feel relieved and grateful to have found some sustenance in this unforgiving desert. With 450 Credits left you push on, your eyes fixed on the distant horizon where the settlement lies. After what seems like an eternity, you finally crest a dune and see the glimmering towers of the settlement in the distance. You quicken your pace, feeling a surge of hope and relief at the sight. The town is within reach, but you\'ll need to be cautious - who knows what dangers might lurk in this unforgiving environment.',
    buttons: []
  },

  theTravlerTradeStory: {
    text: 'You accept the price as is, and you agree to buy the food and water for a 200 credits. You hand over the credits, and Ali hands you the supplies. You feel relieved and grateful to have found some sustenance in this unforgiving desert.With only 300 Credits left you push on, your eyes fixed on the distant horizon where the settlement lies. After what seems like an eternity, you finally crest a dune and see the glimmering towers of the settlement in the distance. You quicken your pace, feeling a surge of hope and relief at the sight. The town is within reach, but you\'ll need to be cautious - who knows what dangers might lurk in this unforgiving environment.',
    buttons: ['']
  },

  theLostShip: {
    text: 'As you approach the settlement, you notice that there are several individuals moving around and working on various tasks. You land your ship and step out to introduce yourself to the settlers. At first, they seem friendly and welcoming, eager to learn more about your travels and your ship. However, as you begin to converse with them, you realize that they are becoming increasingly interested in your ship and its capabilities. The settlers explain that their settlement is located on a resource-poor planet and they are constantly struggling to meet their basic needs. They have been attempting to repair an old spacecraft for years, but they lack the knowledge and resources to get it fully operational.They see your ship as a potential solution to their problems and begin to pressure you to sell or trade it to them. Despite your reluctance, the settlers become increasingly aggressive and make it clear that they will do whatever it takes to obtain your ship. They soon realize you aren\'t willing to part with your ship and decide to confiscate it. They give you a miserable offering of 1,500 credits and begin to lead you further into the settlement. You are vastly outnumbered, and despite the settlers not owning a functioning spacecraft... They are very well armed with old, but clearly well cared for plasma rifles.',

    buttons: ['']
  },

  theTown: {
    text: 'lipsem'
  }

};

//*******Global*********
let buttonContainer = document.getElementsByClassName('buttonContainer');
let buttonOption = document.getElementsByClassName('buttonOption');

// let introSection = document.getElementById('introSection');
// let story = document.getElementById('story');
// let investigateStory = document.getElementById('investigateStory');
// let flyStory = document.getElementById('flyStory');
// let monitorStory = document.getElementById('monitorStory');
// let exploreWreckageStory = document.getElementById('exploreWreckageStory');
// let theFootJourneyToSettlementStory = document.getElementById('theFootJourneyToSettlementStory');
// let theFootJourneyToMountainStory = document.getElementById('theFootJourneyToMountainStory');
// let theTravlerBarterStory = document.getElementById('theTravlerBarterStory');
// let theTravlerStory = document.getElementById('theTravlerStory');
// let theCrashStory = document.getElementById('theCrashStory');
// let theTravlerTradeStory = document.getElementById('theTravlerTradeStory');

// let investigateShipWreckOption = document.getElementById('investigateShipWreckOption');
// let flyToSettlementOption = document.getElementById('flyToSettlementOption');
// let monitorSituationOption = document.getElementById('monitorSituationOption');
// let exploreWreckageOption = document.getElementById('exploreWreckageOption');
// let exploreSettlementOption = document.getElementById('exploreSettlementOption');
// let exploreMountainsOption = document.getElementById('exploreMountainsOption');
// let flyCanyonOption = document.getElementById('flyCanyonOption');
// let flyThroughOption = document.getElementById('flyThroughOption');
// let avoidTravlerOption = document.getElementById('avoidTravlerOption');
// let acceptTradeAsIsOption = document.getElementById('acceptTradeAsIsOption');
// let barterOption = document.getElementById('barterOption');
// let theTownStory = document.getElementById('theTownStory');
// let approachTravlerOption = document.getElementById('approachTravlerOption');


//*******Arrays( Place Elements inside Array to remove them))********
// let storyArray = [];
// storyArray.push(investigateStory, flyStory, monitorStory, exploreWreckageStory, theFootJourneyToSettlementStory, theFootJourneyToMountainStory, theCrashStory, theTravlerStory, theTravlerBarterStory, theTravlerTradeStory);
// console.log(storyArray);

let optionArray = [];
optionArray.push(investigateShipWreckOption, flyToSettlementOption, monitorSituationOption, exploreWreckageOption, exploreSettlementOption, exploreMountainsOption, flyCanyonOption, flyThroughOption, avoidTravlerOption, acceptTradeAsIsOption, barterOption);


//*******Remover Functions********
// function invisibleOptions() {
//   for (let i = 0; i < optionArray.length; i++) {
//     optionArray[i].remove();
//   }
// }

// function invisibleStorys() {
//   for (let i = 0; i < storyArray.length; i++) {
//     storyArray[i].remove();
//   }
// }





let scenario = {
  startingStory: {
    text: 'You are Captain [Name], a seasoned explorer and captain of your own spaceship. Your latest mission has brought you to the desolate desert planet of Xirra, where you\'ve picked up a distress signal from a remote settlement. As you approach the planet, you see the wreckage of a ship on the surface below. What will you do, Captain [Name]? The fate of Xirra and your own journey rests in your hands.',
    buttons:
      [['Investigate Shipwreck', advanceTo(scenario.investigateCrash)], ['Fly to Settlement', advanceTo(scenario.flyToTown)], ['Monitor from orbit', advanceTo(scenario.monitor)]]
  },

  investigateCrash: {
    text: 'As you land your ship near the wreckage you hear a loud crunching sound and your ship shudders. The landing gear has been damaged, and you won\'t be able to take off until it\'s fixed. From your ship it looks as if there isn\'t much salvageable at the wreckage. you notice there is a mountain range with what looks like signs of civilization, and you remember the original town with the distress signal. you wonder where you could go to get parts to repair your ship.',
    buttons: [['Explore Wreckage', advanceTo(scenario.exploreWreckage)], ['Travel to Mountains', advanceTo(scenario.theFootJourneyToMountain)], ['Travel to Town', advanceTo(scenario.theTown)]]
  },
  flyToTown: {
    text: 'You bypass the shipwreck and fly directly to the settlement where the distress signal originated from. However, your ship\'s systems detect an incoming sandstorm in that direction, which could damage your ship and make it difficult to navigate. You\'ll need to be careful and make a decision quickly if you want to reach the settlement before the storm hits. you can either fly straight through the storm risking damage to your flight navigation systems or try flying through the narrow rocky canyon avoiding the storm but you risking crashing into the walls of the canyon. ',
    buttons: [['Fly through storm', advanceTo(scenario.flyThroughStorm)], ['Fly through canyon' advanceTo(scenario.flyThroughCanyon)]]
  },

  flyThroughCanyon: {
    text: 'As you rush towards the settlement, you decide to take a risky route through a rocky canyon to avoid the incoming sandstorm. The journey is rough, and you have to navigate through narrow passages, dodging sharp rocks and boulders. Suddenly, you misjudge a turn and crash into the canyon wall, damaging your ship and injuring yourself in the process. Despite the setback, you manage to continue on your journey, but you\'ll need to be more careful in the future, you finish your flight and make it the remainder of the way to the settlement..',
    buttons: [['Continue to Settlement', advanceTo(scenario.theLostShip)]]
  },

  flyThroughStorm: {
    text: 'You decide to take a risk and fly through the sandstorm to reach the settlement quickly. As you navigate through the storm, your ship is pelted by sand and debris, causing the systems to malfunction. You struggle to keep the ship airborne as the winds buffet it from all sides.',
    buttons: [['CRASH', advanceTo(scenario.theCrash)]]
  },

  monitor: {
    text: 'You stay in orbit and monitor the situation from a safe distance. you notice a large sandstorm near the wreckage and as you observe the wreckage, you can tell that there\'s nothing of value left. It\'s just a pile of twisted metal and debris. However, you notice a small settlement in the distance. It\'s located in a remote part of the planet\'s desert, but it\'s the only sign of life you\'ve seen so far.  You decide to fly directly to the settlement where the distress signal originated from.',
    buttons: [['Fly to Settlement', advanceTo(scenario.theLostShip)]]
  },
  exploreWreckage: {
    text: 'As you rummage through the wreckage, you notice a few things of interest: a first aid kit, a toolbox, and 1000 credits. However, your search is suddenly interrupted by the sound of growling coming from nearby. a massive sand creature approaching, and you realize you need to act fast. You don\'t have time to grab any of the items before retreating back to your ship. however you may be able to return and grab the items later. you wait in your ship until the creature retreats back to the wreckage what do you do now?',
    buttons: [['Head Towards Mountains', advanceTo(scenario.theFootJourneyToMountain)],['Head Towards Settlement', advanceTo(scenario.theFootJourneyToSettlement)]]
  },

  theFootJourneyToSettlement: {
    text: 'The journey to the settlement is treacherous and unforgiving. The scorching sun beats down on you relentlessly, and the endless dunes make the going slow and exhausting. Your water supply is running low, and you\'re starting to feel the effects of dehydration. add to this prompt where you encounter a person As you trudge through the endless desert, you catch a glimpse of movement in the distance. As you get closer, you see that it\'s a person, stumbling and swaying as they make their way across the dunes. They look disoriented and dehydrated, much like you feel. Do you approach them and offer assistance, or do you continue on your journey to the settlement unnoticed, knowing that every minute counts? The decision is yours to make.',
    buttons: [['Approach the weary travler'advanceTo(scenario.theTravler)]]
  },
  theFootJourneyToMountain: {
    text: 'As you make your way towards the mountains, you notice the terrain getting rougher and more difficult to navigate. The sand gives way to rocks and the occasional patch of sparse vegetation. Suddenly, you hear a strange noise that sounds like a mix between a roar and a screech. You stop in your tracks and scan the surroundings, and soon enough, you spot the source of the sound: a massive creature with thick fur, sharp claws, and glowing eyes. It\'s like nothing you\'ve ever seen before, but one thing is certain - it\'s not friendly. The creature starts charging at you, and you realize you\'ll need to act fast if you want to survive this encounter.'
  },
  MountainStoryTwo: {
    text: 'The settlement has walls all around with sentries, so they decided it would be okay to give you a plasma pistol before forcing you out of their main gate. As you make your way towards the mountains, you notice the terrain getting rougher and more difficult to navigate. The sand gives way to rocks and the occasional patch of sparse vegetation. Suddenly, you hear a strange noise that sounds like a mix between a roar and a screech. You stop in your tracks and scan the surroundings, and soon enough, you spot the source of the sound: a massive creature with thick fur, sharp claws, and glowing eyes. It\'s like nothing you\'ve ever seen before, but one thing is certain - it\'s not friendly. The creatur starts charging at you, and you realize you\'ll need to act fast if you want to survive this encounter.'
  },
  theCrash: {
    text: 'As you push your ship to its limits, flying through the sandstorm, you start to lose control. The winds are too strong, and the sand is battering the hull of your ship. Suddenly, you hear a loud crash, and everything goes black. When you come to, you realize that your ship has crashed. The hull is severely damaged, and most of your supplies have been destroyed. You\'re lucky to be alive but now you\'re stranded on this strange planet with no way to contact anyone for help. Time to make your way to the town on foot.'
  },
  theTravler: {
    text: 'You approach the traveler, they turn to face you and smile, relieved to see another person in this harsh environment. They introduce themselves as Ali and explain that they\'re a trader, traveling between settlements to sell goods and supplies. Ali offers to sell you some much-needed water and supplies to help you on your journey, but warns that the prices are steep out here in the desert.'
  },

  theTravlerBarterStory: {
    text: 'you try to negotiate the price, and after some haggling, he agrees to sell you the food and for a mere 50 credits. You hand over the credits, and Ali hands you the supplies. You feel relieved and grateful to have found some sustenance in this unforgiving desert. With 450 Credits left you push on, your eyes fixed on the distant horizon where the settlement lies. After what seems like an eternity, you finally crest a dune and see the glimmering towers of the settlement in the distance. You quicken your pace, feeling a surge of hope and relief at the sight. The town is within reach, but you\'ll need to be cautious - who knows what dangers might lurk in this unforgiving environment.'
  },

  theTravlerTradeStory: {
    text: 'You accept the price as is, and you agree to buy the food and water for a 200 credits. You hand over the credits, and Ali hands you the supplies. You feel relieved and grateful to have found some sustenance in this unforgiving desert.With only 300 Credits left you push on, your eyes fixed on the distant horizon where the settlement lies. After what seems like an eternity, you finally crest a dune and see the glimmering towers of the settlement in the distance. You quicken your pace, feeling a surge of hope and relief at the sight. The town is within reach, but you\'ll need to be cautious - who knows what dangers might lurk in this unforgiving environment.'
  },

  theLostShip: {
    text: 'As you approach the settlement, you notice that there are several individuals moving around and working on various tasks. You land your ship and step out to introduce yourself to the settlers. At first, they seem friendly and welcoming, eager to learn more about your travels and your ship. However, as you begin to converse with them, you realize that they are becoming increasingly interested in your ship and its capabilities. The settlers explain that their settlement is located on a resource-poor planet and they are constantly struggling to meet their basic needs. They have been attempting to repair an old spacecraft for years, but they lack the knowledge and resources to get it fully operational.They see your ship as a potential solution to their problems and begin to pressure you to sell or trade it to them. Despite your reluctance, the settlers become increasingly aggressive and make it clear that they will do whatever it takes to obtain your ship. They soon realize you aren\'t willing to part with your ship and decide to confiscate it. They give you a miserable offering of 1,500 credits and begin to lead you further into the settlement. You are vastly outnumbered, and despite the settlers not owning a functioning spacecraft... They are very well armed with old, but clearly well cared for plasma rifles.'
  },

  theTown: {
    text: 'lipsem'
  }

};





//**********Handler Functions***********
// function handleButtonClick(event) {
//   storyArray.push(story);
//   invisibleStorys();
//   console.log(storyArray);
//   console.log(event.target);
//   console.log(buttonOption[0]);
//   // console.log(story1);
//   if (event.target === buttonOption[0]) {
//     introSection.appendChild(investigateStory);
//   } else if (event.target === buttonOption[1]) {
//     introSection.appendChild(flyStory);
//   } else if (event.target === buttonOption[2]) {
//     introSection.appendChild(monitorStory);
//   }

//   invisibleOptions();
// }

// LOCAL STORAGE STARTS HERE
// let stringifiedOption = JSON.stringify(optionArray);

// console.log('Stringified Option >>> ', stringifiedOption);

// localStorage.setItem('myOption', stringifiedOption);


// console.log(optionArray);

//*********Executable Code*************
// for (let i = 0; i < buttonContainer.length; i++) {
//   buttonContainer[i].addEventListener('click', handleButtonClick);
// }
// invisibleStorys();
// imgContainer.addEventListener('click', handleImgClick);
// resultsBtn.addEventListener('click', handleShowResults);
advanceTo(scenario.startingStory);
