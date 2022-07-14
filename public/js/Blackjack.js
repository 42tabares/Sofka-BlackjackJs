import Player from './player.js';
import Deck from './deck.js';
import Round from './round.js';

const playersIndex = document.getElementById("players-input")
const playersDecks = document.getElementById("players-decks")

console.log(playersIndex)
console.log(playersDecks)





/*
numberOfPlayers = 0
while (numberOfPlayers > 4 || numberOfPlayers <= 0){
    //numberOfPlayers = prompt("> ")
}

listOfPlayers = []
for(let i = 1; i <= numberOfPlayers; i++){
    //newPlayerName       = prompt(`Player ${i} Name > `) 
    newPlayer           = new Player(newPlayerName)
    listOfPlayers.push(newPlayer)
}


runGame = "Y"
while (runGame === "Y"){

    mace = new Deck()
    mace.buildMaceDeck()
    round1 = new Round(listOfPlayers)
    console.log("\nTHE GAME STARTS! THE CARDS ARE THROWN!\n")
    round1.startGame(mace)
    
    roundNumber = 1
    while (round1.playing && roundNumber < 3) {
        round1.playRound(mace)
        roundNumber++
    }
    
    round1.returnWinners()
    round1.displayCash()

    //runGame = prompt("Will the players play again? (Y/N) > ")
}
*/

