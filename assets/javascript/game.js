//computer chooses random number from array and console.logs it
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computer);
//variables for wins and losses.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = guessesLeft;

//user choice array
var userChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//function that places userchoice into #left

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('left').innerHTML = ("Guesses Left: " + guesses);


document.onkeypress = function(event) {
  var userChoice = event.key;
 
    
  if (guesses === guessesLeft) {
    document.getElementById('guess').innerText = "";
    var newContent = document.createTextNode(userChoice); 
  } else {
    var newContent = document.createTextNode(', ' + userChoice);
  }
  var newEl = document.createElement('span').appendChild(newContent);
  document.getElementById('guess').appendChild(newEl);

//if first-child add coma, if not first-child don't add coma



//if else alerting win or lose
  if (computer === userChoice) {
    guesses = 10;
    wins++;
    document.getElementById('wins').innerHTML = ("Wins: " + wins);
    computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(computer);
    } else {
    document.getElementById('left').innerHTML = ("Guesses Left: " + guesses--);
  }
  if (guesses === 0) {
      losses++;
      document.getElementById('losses').innerHTML = ("Losses: " + losses);
      guesses = guessesLeft;

    } 

};

