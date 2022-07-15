import Player from './player.js';
import Deck from './deck.js';
import Round from './round.js';

const addPlayerButton = document.getElementById("number-of-players-input")
const playerNameInput = document.getElementById("player-name-input")
const playerCheckout = document.getElementById("players-checkout")
const deckHandler = document.getElementById("deck-handler")
const playersDecks = document.getElementById("players-decks")

addPlayerButton.addEventListener("click", savePlayer)

let players =[]
function savePlayer(event){
    let playerName = playerNameInput.value
    if (players.length < 4){
        let newPlayer = new Player(playerName)
        players.push(newPlayer)
        playerCheckout.innerHTML += `<span>Name: ${newPlayer.name} Cash: ${newPlayer.cash}</span></br>`
    }
    playerNameInput.value = ''

    if (players.length === 2){
        document.getElementById('start-button').innerHTML += "<button id='start-game-button'>Start Game</button>"
        document.getElementById('start-game-button').addEventListener("click", startRound)
    }
}

function startRound(event){
    let mace = new Deck()
    mace.buildMaceDeck()
    players.forEach(player => {
        player.takeStartingDeck(mace)
    })
    document.getElementById('start-button').style.visibility = "hidden"
    playerCheckout.style.visibility = "hidden"
    deckHandler.style.visibility = "visible"
}


let playingGame = true






/*
function printInputs(){
    let playerID = playersNames.children.length
    if (playerID < 4){
        playersNames.innerHTML += `<input type="text" id="Player_${playerID}">`;
        document.getElementById(`Player_${playerID}`).onkeyup = savePlayer;
    }
}

*/




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

