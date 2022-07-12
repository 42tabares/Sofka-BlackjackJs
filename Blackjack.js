let Player = require('./player.js');
let Deck = require('./deck.js');
const Round = require('./round.js');
let prompt = require('prompt-sync')();

console.log("♤ ♡ ♢ ♧ BLACKJACK ♧ ♢ ♡ ♤")
console.log("Open the game! please select the quantity of Human Players")

numberOfPlayers = 0
while (numberOfPlayers > 4 || numberOfPlayers <= 0){
    numberOfPlayers = prompt("> ")
}

housePlayer = new Player("THE HOUSE", false);
listOfPlayers = [housePlayer]
for(let i = 1; i <= numberOfPlayers; i++){
    newPlayerName       = prompt(`Player ${i} Name >`) 
    newPlayer           = new Player(newPlayerName, true)
    listOfPlayers.push(newPlayer)
}

runGame = "Y"
while (runGame === "Y"){

    console.log("It ran the game")

    mace = new Deck()
    mace.buildMaceDeck()
    round1 = new Round(listOfPlayers)

    console.log("LIST OF PLAYERS " + round1.listOfPlayers)
    
    round1.startGame(mace)

    
    for (let i = 1; i < 3; i++) {
        round1.playRound(mace)
    }

    console.log("It passed three rounds")

    round1.checkWinners()
    runGame = prompt("Will the players play again? (Y/N) \n >")
}

console.log("END OF THE GAME!")

