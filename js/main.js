console.log("Up and running!")
/*
var cardOne = "queen";
console.log("User flipped " + cardOne)
var cardTwo = "queen";
console.log("User flipped " + cardTwo)
var cardThree = "king";
console.log("User flipped " + cardThree)
var cardFour = "king";
console.log("User flipped " + cardFour)
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log('User flipped ' + cardsInPlay[0]);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log('User flipped ' + cardsInPlay[1]);
if (cardsInPlay.length > 1) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, please try again.");
	}
} else {
	alert("Please pick another card!");
}