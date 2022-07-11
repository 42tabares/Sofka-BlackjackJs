let Player = require('./player.js');
let Card = require('./card.js');
let Deck = require('./deck.js');

console.log("B L A C K J A C K !")
console.log("Open the game! please input your name!")

let ASP = new Card("Ace of Spades")
console.log(ASP.getValue(10))

let Mace = new Deck()
Mace.buildPlayingDeck()

let tabares = new Player("Tabares")
tabares.takeStartingDeck(Mace)
tabares.takeRandomCard(Mace)
console.log(tabares.deck)
console.log(Mace)