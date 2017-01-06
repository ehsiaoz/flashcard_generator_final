# flashcard_generator
Flashcard Generator week 11 homework

README for Flashcard.js

Flashcard offers the following 5 methods: (refer to card1test.js for an example on how to use flashcard.js)

flashcard.createFC(question,answer)
	- Creates two types of flashcards: (basic and cloze)
	- flashcard.createFC takes two arguments.  
		- Argument 1: Question
		- Argument 2: Answer
		- If either argument has a value of 'null' or 'undefined', the function will throw an error.
	- To create a baisc flashcard, Question = "question", and Answer = "answer"
	- To create a cloze flashcard, include square brackets "[]" for the cloze portion of the question, and the Answer will be whatever text should be inside the cloze "[]".
	- Basic flashcard example: 
		- Question = "Who was the 1st president of the U.S?"
		- Answer = "George Washington"
	- Cloze flashcard example:
		- Question = "[] was the 1st president of the U.S"
		- Answer = "Geroge Washington"
	- Successful creation of a flashcard will automatically save the question as a json object to a file in the same path called: flashcards.json
	- Sample output to flashcard.json:
	- {"type":"basic","data":{"front":"first president was honest","back":"George Washington","ftext":"first president was honest George Washington"}}, {"type":"cloze","data":{"front":"first president was ______ honest","back":"George Washington","ftext":"first president was George Washington honest"}}, 

flashcard.getFrontText(fc)
	- Allows user to retrieve the front of the flashcard that was just created
	- If the flashcard created was a 'basic' flashcard, this method will just return the question.
	- If the flashcard created was a 'cloze' flashcard, this method will replace the square brackets "[]" in the question with an underline "_________" and return the question.

flashcard.getBackText(fc)
	- Allows user to retrieve the back of the flashcard that was just created
	- For both 'basic' and 'cloze' flashcards, the method will simply return the answer.

flashcard.getFullText(fc)
	- Allows user to retrieve both the question and the answer simultaneously.
	- For 'basic' flashcards, the method will return the question followed by the answer. (Example: "Who was the 1st president of the U.S", "George Washington")
	- For 'cloze' flashcards, the method will return the question with the correct answer replacing the square brackets "[]" (Example: "George Washington was the 1st president of the U.S")

flashcard.getFlashCardList():
	- Returns a json object that includes all of the flashcards created and stored in flashcards.json file