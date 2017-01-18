//pulls exported files into main.js
var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = game.randomWord;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randomWord);
var maxGuesses = 15;
//starts gaame
function takeAGuess(){
	console.log(myWord.toString());
	//ends game
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('You have no more guesses. WOMP WOMP.');
	return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){

			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		//game controls
		}]).then(function(letterInput){
				var letter = letterInput.letter; 
				//checks
				myWord.findLetter(letter);
					//winner
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return;
					}
					//if games does not end continue to the next guess and recurive call
				console.log('-------------------\n');
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				takeAGuess();
				}
  );
}
//starts game over
takeAGuess();