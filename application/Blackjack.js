const Player = require('./player.js');
const Deck = require('./deck.js');
const Round = require('./round.js');
const prompt = require('prompt-sync')();

console.log("\n♤ ♡ ♢ ♧ BLACKJACK ♧ ♢ ♡ ♤")
console.log("Open the game! please select the quantity of Players")

numberOfPlayers = 0
while (numberOfPlayers > 4 || numberOfPlayers <= 0){
    numberOfPlayers = prompt("> ")
}

listOfPlayers = []
for(let i = 1; i <= numberOfPlayers; i++){
    newPlayerName       = prompt(`Player ${i} Name > `) 
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

    runGame = prompt("Will the players play again? (Y/N) > ")
}

console.log("\n♤ ♡ ♢ ♧ END OF THE GAME! ♧ ♢ ♡ ♤\n")
round1.displayCash()

