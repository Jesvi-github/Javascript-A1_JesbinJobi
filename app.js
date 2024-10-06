// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Initialize textToSpeak
var textToSpeak = '';

// Arrays for random word generation
var subjectArray = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephent', 'The cat'];
var verbArray = ['sat on', 'ate', 'danced with', 'saw', 'does not like', 'kissed'];
var adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nounArray = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var placeArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soap', 'on the grass', 'in my shoes'];

// Select buttons
var subjectButton = document.getElementById('subjectButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var nounButton = document.getElementById('nounButton');
var placeButton = document.getElementById('placeButton');
var speakButton = document.getElementById('speakButton');
var storyTextElement = document.getElementById('storyText');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function updateStoryText() {
	// Update the paragraph element with the current textToSpeak
	storyTextElement.textContent = textToSpeak;
}

/* Event Listeners
-------------------------------------------------- */
subjectButton.onclick = function() {
	var randomSubject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
	textToSpeak += randomSubject + ' ';
	updateStoryText();
};

verbButton.onclick = function() {
	var randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
	textToSpeak += randomVerb + ' ';
	updateStoryText();
};

adjectiveButton.onclick = function() {
	var randomAdjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
	textToSpeak += randomAdjective + ' ';
	updateStoryText();
};

nounButton.onclick = function() {
	var randomNoun = nounArray[Math.floor(Math.random() * nounArray.length)];
	textToSpeak += randomNoun + ' ';
	updateStoryText();
};

placeButton.onclick = function() {
	var randomPlace = placeArray[Math.floor(Math.random() * placeArray.length)];
	textToSpeak += randomPlace + ' ';
	updateStoryText();
};

// Onclick handler for the button that speaks the text contained in textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
};
