let Player = require('./player.js');
let Deck = require('./deck.js');
const Round = require('./round.js');
let prompt = require('prompt-sync')();



console.log("♤ ♡ ♢ ♧ BLACKJACK ♧ ♢ ♡ ♤")
console.log("Open the game! please select the quantity of Players")

numberOfPlayers = 0
while (numberOfPlayers > 4 || numberOfPlayers <= 0){
    numberOfPlayers = prompt("> ")
}

listOfPlayers = []
for(let i = 1; i <= numberOfPlayers; i++){
    newPlayerName       = prompt(`Player ${i} Name > `) 
    newPlayer           = new Player(newPlayerName, true)
    listOfPlayers.push(newPlayer)
}


runGame = "Y"
while (runGame === "Y"){

    mace = new Deck()
    mace.buildMaceDeck()
    round1 = new Round(listOfPlayers)
    console.log("\nTHE GAME STARTS! THE CARDS ARE THROWN!\n")
    round1.startGame(mace)
        
    for (let i = 1; i < 3; i++) {
        round1.playRound(mace)
    }

    round1.checkWinners()
    runGame = prompt("Will the players play again? (Y/N) > ")
}

console.log("END OF THE GAME!")

