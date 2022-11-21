/*--------------VARIABLES---------------*/

let runningCount = 0;
let cardsDealt = 0;
let decksRemaining = 8;
let cardsRemaining = 416;
let highCardsRemaining = 160;
let lowCardsRemaining = 160;
let middleCardsRemaining = 96;


/*--------------FUNCTIONS--------------*/

function lowCard() {
  runningCount++;
  cardsDealt++;
  document.getElementById('runningCount').innerHTML = runningCount;
  document.getElementById('cardsDealt').innerHTML = cardsDealt;

  trueCountCalculation();
  cardsRemainingCalculation();
  lowCardsRemainingCalculation();
  lowCardPercentageCalculation();
  middleCardPercentageCalculation();
  highCardPercentageCalculation();
  decksRemainingCalculation();

  statusHTML();
  statusStyle();
}



function middleCard() {
  runningCount + 0;
  cardsDealt++;
  document.getElementById('runningCount').innerHTML = runningCount;
  document.getElementById('cardsDealt').innerHTML = cardsDealt;

  trueCountCalculation();
  cardsRemainingCalculation();
  middleCardsRemainingCalculation();
  lowCardPercentageCalculation();
  middleCardPercentageCalculation();
  highCardPercentageCalculation();
  decksRemainingCalculation();

  statusHTML();
  statusStyle();
}



function highCard() {
  runningCount--;
  cardsDealt++;
  document.getElementById('runningCount').innerHTML = runningCount;
  document.getElementById('cardsDealt').innerHTML = cardsDealt;

  trueCountCalculation();
  cardsRemainingCalculation();
  highCardsRemainingCalculation();
  lowCardPercentageCalculation();
  middleCardPercentageCalculation();
  highCardPercentageCalculation();
  decksRemainingCalculation();

  statusHTML();
  statusStyle();
}


function newShoe() {
  cardsDealt = 0;
  runningCount = 0;
  cardsRemaining = 416;
  highCardsRemaining = 160;
  lowCardsRemaining = 160;
  middleCardsRemaining = 96;

  document.getElementById('runningCount').innerHTML = runningCount;
  document.getElementById('cardsDealt').innerHTML = cardsDealt;

  trueCountCalculation();
  lowCardPercentageCalculation();
  middleCardPercentageCalculation();
  highCardPercentageCalculation();
  decksRemainingCalculation();

  statusHTML();
  statusStyle();
}


function decksRemainingCalculation() {
  if (cardsDealt < 27) {
    decksRemaining = 8;
  } else if (cardsDealt >= 27 && cardsDealt < 52) {
    decksRemaining = 7.5;
  } else if (cardsDealt >= 52 && cardsDealt < 78) {
    decksRemaining = 7;
  } else if (cardsDealt >= 78 && cardsDealt < 104) {
    decksRemaining = 6.5;
  } else if (cardsDealt >= 104 && cardsDealt < 130) {
    decksRemaining = 6;
  } else if (cardsDealt >= 130 && cardsDealt < 156) {
    decksRemaining = 5.5;
  } else if (cardsDealt >= 156 && cardsDealt < 182) {
    decksRemaining = 5;
  } else if (cardsDealt >= 182 && cardsDealt < 208) {
    decksRemaining = 4.5;
  } else if (cardsDealt >= 208 && cardsDealt < 234) {
    decksRemaining = 4;
  } else if (cardsDealt >= 234 && cardsDealt < 260) {
    decksRemaining = 3.5;
  } else if (cardsDealt >= 260 && cardsDealt < 286) {
    decksRemaining = 3;
  } else if (cardsDealt >= 286 && cardsDealt < 312) {
    decksRemaining = 2.5;
  } else if (cardsDealt >= 312 && cardsDealt < 338) {
    decksRemaining = 2;
  } else if (cardsDealt >= 338 && cardsDealt < 364) {
    decksRemaining = 1.5;
  } else if (cardsDealt >= 364 && cardsDealt < 390) {
    decksRemaining = 1;
  } else if (cardsDealt >= 390 && cardsDealt < 403) {
    decksRemaining = 0.50;
  } else decksRemaining = 0.25;


}

function trueCountCalculation() {
  let x = runningCount;
  
  let trueCount = x / decksRemaining;
  let n = trueCount.toFixed(2);

document.getElementById('trueCount').innerHTML = n;  
}

function cardsRemainingCalculation(){
  cardsRemaining--;
}

function highCardsRemainingCalculation(){
  highCardsRemaining--;
}

function lowCardsRemainingCalculation(){
  lowCardsRemaining--;
}

function middleCardsRemainingCalculation(){
  middleCardsRemaining--;
}

function lowCardPercentageCalculation() {
  lowCardPercentage = (lowCardsRemaining / cardsRemaining) * 100;
  let n = lowCardPercentage.toFixed(2);
  document.getElementById('lowCardPercentage').innerHTML = n;
}

function middleCardPercentageCalculation() {
  middleCardPercentage = (middleCardsRemaining / cardsRemaining) * 100;
  let n = middleCardPercentage.toFixed(2);
  document.getElementById('middleCardPercentage').innerHTML = n;
}

function highCardPercentageCalculation() {
  highCardPercentage = (highCardsRemaining / cardsRemaining) * 100;
  let n = highCardPercentage.toFixed(2);
  document.getElementById('highCardPercentage').innerHTML = n;
}



/*--------------FACTORY FUNCTIONS---------------*/

function statusHTML() {
    if (document.getElementById('trueCount').innerHTML > 2.9 && document.getElementById('trueCount').innerHTML <= 5) {
    document.getElementById('status').innerHTML = "BET";
  } else if (document.getElementById('trueCount').innerHTML > 5 ) {
    document.getElementById('status').innerHTML = "BIG BET!";
  } else if (document.getElementById('trueCount').innerHTML < 0 && document.getElementById('trueCount').innerHTML >= -2) {
    document.getElementById('status').innerHTML = "Cold";
  } else if (document.getElementById('trueCount').innerHTML < -2 && document.getElementById('trueCount').innerHTML) {
    document.getElementById('status').innerHTML = "HOLD!";
  } else if (document.getElementById('trueCount').innerHTML === 0) {
    document.getElementById('status').innerHTML = "Moderate";
  } else document.getElementById('status').innerHTML = "Moderate";
}

function statusStyle() {
  if (document.getElementById('trueCount').innerHTML > 2.9 && document.getElementById('trueCount').innerHTML <= 5) {
    document.getElementById('status').style.color = "lightgreen";
  } else if (document.getElementById('trueCount').innerHTML > 5 ) {
    document.getElementById('status').style.color = "darkgreen";
  } else if (document.getElementById('trueCount').innerHTML < 0 && document.getElementById('trueCount').innerHTML >= -2) {
    document.getElementById('status').style.color = "pink";
  } else if (document.getElementById('trueCount').innerHTML < -2 && document.getElementById('trueCount').innerHTML) {
    document.getElementById('status').style.color = "darkred";
  } else if (document.getElementById('trueCount').innerHTML === 0) {
    document.getElementById('status').style.color = "rgb(100, 100, 255)";
  } else document.getElementById('status').style.color = "rgb(100, 100, 255)";
  
}






  





