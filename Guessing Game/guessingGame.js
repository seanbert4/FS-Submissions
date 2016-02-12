/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber(),
    pastGuesses = [];

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.ceil(Math.random() * 100);
}

// Fetch the Players Guess

function playersGuessSubmission(event){	
	event.preventDefault();
	playersGuess = +$('#user-guess').val();
	checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	return (playersGuess < winningNumber)
		? "Your guess is too low."
		: "Your guess is too high."
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess === winningNumber) {
		$('#text-output').text("Your guess is correct! YOU JUST WON THE GAME!!")
		$("h1").addClass("win");
	} 
	else if (pastGuesses.indexOf(playersGuess) === -1) {
		pastGuesses.push(playersGuess);
		$('#text-output').text(guessMessage());
	} else {
		$('#text-output').text("That's a duplicate guess! Try again.");
	}
}

function guessMessage() {
	if (pastGuesses.length === 5) {
		$('#text-output').text("WRONG! You're out of guesses. YOU JUST LOST THE GAME!!!");
		$("h1").addClass("lose");
	} else {
	var result = lowerOrHigher() + " ";
	result += "You are within " 
		   + Math.abs(winningNumber - playersGuess) 
		   + " digits of the correct answer."
		   + " You have " + (5 - pastGuesses.length) + " guesses remaining.";
	return result;
	}	
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	var answers = [];
	for (var i = 1; i <= 3; i++) {
		answers.push(generateWinningNumber());
	}
	answers[Math.floor(Math.random() * 3)] = winningNumber;
	$('#text-output').text("One of the following numbers is the correct answer: " + answers.join(", ") + ".");
}

// Allow the "Player" to Play Again

function playAgain(){
	location.reload(false);
}

/* **** Event Listeners/Handlers ****  */
$(document).ready(function() {
	$('#submit-button').on('click', playersGuessSubmission);
	$('#hint-button').on('click', provideHint);
	$('#again-button').on('click', playAgain);
});

