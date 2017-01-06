var basicFC = require('./basicF.js');
var clozeFC = require('./clozeF.js');
var fs = require('fs');

var flashcard = {
	//method for creating a new flashcard
	createFC: function(question, answer){
		const FILE_PATH = './flashcards.json';
		var newFlashCard = null;
		// input validation - return error if not
		if(question === null || answer === null || question === undefined || answer === undefined){
			console.log("ERROR: invalid inputs. Please provide 2 arguments");
			return null;
		}
		
		// logic to determine whether basic or cloze
		if(question.indexOf('[]') > -1){
			newFlashCard = clozeFC(question, answer);
		}
		else{
			newFlashCard = basicFC(question, answer);
		}

		var newFile = false;
		var flashcardArray = [];
		var writeOut = null;

		//read .json file in current directory
		fs.readFile(FILE_PATH, 'utf8', function (err, data) {
			//if file does not exist (i.e. error)
			if (err) {
				console.log("This is the readFile error: ", err);
				newFile = true;	
			}
			//console.log("This is content of the file: " + data);
			//if the .json file exists
			if(!newFile){
				//flashcardArray is equal to the parsed result of .json file (array of previously created flashcards)
				flashcardArray = JSON.parse(data);
			}
			//add the newly created flashcard to the existing array
			flashcardArray.push(newFlashCard);
			//convert the flashcardarray to string
			writeOut = JSON.stringify(flashcardArray);
			//overwrite the contents of the .json file with updated list of flashcards
			fs.writeFile(FILE_PATH, writeOut, function(err){
				if(err) {
				    return console.log(err);
				}
				console.log("The file was saved!");
			});  
		});

		// check for errors
		if(newFlashCard.error){
			console.log(newFlashCard.error);
			return null;
		}
		// return the flashcard object
		return newFlashCard;
	},
	//method to return front of flashcard
	getFrontText: function(fc){
		return fc.data.front;
	},
	//method to return back of flashcard
	getBackText: function(fc){
		return fc.data.back;
	},
	//method to return the full answer
	getFullText: function(fc){
		return fc.data.ftext;
	}, 
	getFlashCardList: function(){
		const FILE_PATH = './flashcards.json';
		var flashcardArray = [];
		fs.readFile(FILE_PATH, 'utf8', function (err, data) {
			//if file does not exist (i.e. error)
			if (err) {
				console.log("This is the readFile error: ", err);	
			}
			flashcardArray = JSON.parse(data);
			console.log("this is flashcardArray: ", flashcardArray);
			return flashcardArray;
		});
	}
};

module.exports = flashcard;


