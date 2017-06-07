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
function flipCards(cardID){
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
}

flipCards(0);
flipCards(2);

if (cardsInPlay.length > 1) {		
	checkForMatch();
} else {
	alert("Please pick another card!");
}

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, please try again.");
	}
}