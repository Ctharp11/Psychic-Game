

//computer chooses random number from array and console.logs it 

var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computer);


//variables for wins and losses.  

var wins = 1; 

var losses = 1; 

var guesses = 9;


//user choice array 

var userChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//function that places userchoice into #left

document.onkeypress = function(event) {

   var userChoice = event.key;
   var newEl = document.createElement('span');
   var newContent = document.createTextNode(userChoice + ', ');
   newEl.appendChild(newContent);
   var position = document.getElementById('guess');
   position.appendChild(newEl);
   

//if else alerting win or lose 


if (computer === userChoice) {
   document.getElementById('wins').innerHTML = ("Wins: " + wins++);
	 computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computer);
   alert("You win! See if you can guess a new letter!")
} else { 
	document.getElementById('losses').innerHTML = ("Losses: " + losses++);
  document.getElementById('left').innerHTML = ("Guesses Left: " + guesses--);
     }  
    
};

if (guesses === 0) {
  alert ('Game over!');
};







