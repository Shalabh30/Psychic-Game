
// Pseudo code for Psychic Game

// - Computer to make a choice
// - User to make a choice upto 9 times
// - Capture those choices: computers and users
// - compare those choices and determine win, loss and tie
// - Display the result to the user -->



// Computer to make choices.
// Create an array that lists all options for computer a to z.

	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];

// Create variables to hold the number of wins, loss and guess left. Wins loss start at 0 and guess left start at 9.

	var Wins = 0; 					// array to capture number of Wins
	var Losses = 0; 				// Array to capture number of Losses
	var TotalGuesses = 9; 			// Array to capture total number of Guess per game for user is 9
	var GuessesLeft = 9;	 		// Array to capture total number of Guess Left per game
	var LettersGuessed = []; 		//Array to capture Letters that user Guessed
	var LetterToGuess = [];			// Array to capture the letters available to guess
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// Computer to make a choice
// Randomly choose a choice from the options array.
	
	function newGame() {
		GuessesLeft = 9;
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 	
		LettersGuessed = [];
		console.log(computerGuess);

	};

	console.log(computerGuess);


// This function is run whenever the user press a key.

	document.onkeyup = function(event) {


// User to make a choice
// Determine which key was preseed by the user

	var userGuess = String.fromCharCode(event.keyCode).
		toLowerCase();

		LettersGuessed.push(userGuess); //Update the user guesss to array of guesses letters

	console.log(userGuess);



// Comapre the choices


	if(userGuess == 'a' || userGuess == 'b' || userGuess == 'c' || userGuess == 'd' || userGuess == 'e' || userGuess == 'f' || userGuess == 'g' || userGuess == 'h' || userGuess == 'i' || userGuess == 'j' || userGuess == 'k' || userGuess == 'l' || userGuess == 'm' || userGuess == 'n' || userGuess == 'o' || userGuess == 'p' || userGuess == 'q' || userGuess == 'r' || userGuess == 's' || userGuess == 't' || userGuess == 'u' || userGuess == 'v' || userGuess == 'w' || userGuess == 'x' || userGuess == 'y' || userGuess == 'z') {

		if (userGuess == computerGuess)	{

			Wins++;
			newGame()

		}	else if (userGuess !== computerGuess) {

			GuessesLeft--;

		} if (GuessesLeft < 1) {

			Losses++;
			newGame()
		}

	} else { 
		alert("InvalidKey")
	};

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.

	var html =
		"<p>Wins: " + Wins + "</p>" +
		"<p>Losses: " + Losses + "</p>" +
		"<p>GuessesLeft: " + GuessesLeft + "</p>" +
		"<p>Your Guesses so far: " + LettersGuessed + "</p>" 		

//Set the inner HTML content of the game div to our html string

	document.querySelector("#game").innerHTML = html;

};



// Problems to Fix:
// computer is not selecting another value after win or loss.
// Users current choice is only getting displayed on the screen, past choices are not displaying. It should display all choices on the screen. something to do with Array "LettersGuessed".
// Once the game is started, "Psychich game" and "Guess what letter I am thinking of" is not displaying on the screen.
// Reset the previous guess