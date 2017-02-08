

//computer chooses random number from array and console.logs it 

var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computer);


//variables for wins and losses.  

var wins = 1; 

var losses = 1; 


//user choice array 

var userChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//function that places userchoice into #left

document.onkeypress = function(event) {

   var userChoice = event.key;
   var newSpan = document.createElement('span');
   var newContent = document.createTextNode("Your guesses so far: " + userChoice);
   document.getElementById('guess').innerHTML = (userChoice);
   //var newSpan = document.createElement('span'); 
   //var userGuesses = document.createTextNode ("Your guesses so far: " + userChoice);
	//document.getElementById('guess').appendChild = (newSpan);

  
   	//userWin.appendChild(newContent);
   	//var userWin = document.createElement('span');
   	//var newContent = document.createTextNode(wins++);
   	//userWin.appendChild(newContent);
   	//var currentDiv = document.getElementById("wins").appendChild(userWin);


   //if else alerting win or lose 

if (computer === userChoice) {
   document.getElementById('wins').innerHTML = ("Wins: " + wins++);
	 computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computer);
} else { 
	document.getElementById('losses').innerHTML = ("Losses: " + losses++);
	
}

};





