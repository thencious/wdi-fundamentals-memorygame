console.log("Up and running!")

var cards = [
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
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
	}
];

function createBoard(){
	$('button').hide();
	$('#newGame').hide();
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCards);
		document.getElementById('game-board').appendChild(cardElement);
	}
	$(document.getElementsByTagName('img')).hide();
	$(document.getElementsByTagName('img')).fadeIn(1000);
}

var cardsInPlay = [];

function flipCards(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	$(this).animate({width: "200px"});
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	setTimeout(function(){
		if (cardsInPlay.length > 1) {		
			checkForMatch();
			cardsInPlay = [];
		} else {}
	}, 500);
}

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, please try again.");
		window.location.reload();
	}
}

$('.instructions').hide();
$('#instructionsButton').on('click', function(){
	$('.instructions').slideToggle(400);
});

document.getElementById('newGame').addEventListener('click', createBoard);
document.getElementById('newBoard').addEventListener('click', createBoard);