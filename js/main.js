console.log("Up and running!")
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
function flipCards(cardID){
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank + " of " + cards[cardID].suit);
}
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, please try again.");
	}
}
flipCards(0);
flipCards(2);
if (cardsInPlay.length > 1) {		
	checkForMatch();
} else {
}