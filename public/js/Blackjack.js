import Player from './player.js';
import Deck from './deck.js';
import Round from './round.js';

const addPlayerButton       = document.getElementById("number-of-players-input")
const playerNameInput       = document.getElementById("player-name-input")
const playerCheckout        = document.getElementById("players-checkout")
const playersDecks          = document.getElementById("players-decks")
const deckHandler           = document.getElementById("deck-handler")
const playerNameTurn        = deckHandler.children[0]
const playerTakeCard        = deckHandler.children[1]
const playerFreezeButton    = deckHandler.children[2]
const winners               = document.getElementById("winners")


addPlayerButton.addEventListener("click", savePlayer)

let players =[]

function savePlayer(event){
    let playerName = playerNameInput.value
    if (players.length < 4){
        let newPlayer = new Player(playerName)
        players.push(newPlayer)
        playerCheckout.innerHTML += `<label>Name: ${newPlayer.name} Cash: ${newPlayer.cash}</label>`
    }
    playerNameInput.value = ''

    if (players.length === 2){
        document.getElementById('start-button').innerHTML += "<button id='start-game-button'>Start Game</button>"
        document.getElementById('start-game-button').addEventListener("click", startGame)
    }
}

let mace = new Deck()
mace.buildMaceDeck()

function startGame(){
    document.getElementById('start-button').style.visibility = "hidden"
    playerCheckout.style.visibility = "hidden"
    deckHandler.style.visibility = "visible"

    players.forEach(player => {
        player.takeStartingDeck(mace)
        playersDecks.innerHTML += player.toHTML()
    })

    window.player = players[0]
}

playerTakeCard.addEventListener("click",takeCard)
playerFreezeButton.addEventListener("click",freeze)

function takeCard(){
    console.log(window.player)
    let player = window.player
    console.log(player)
    player.takeRandomCard(mace);
    player.updateStatus();
    playersDecks.children[players.indexOf(player)].innerHTML = player.toHTML()
    window.player = nextPlayer()
}

function freeze(){
    let player = window.player
    player.status = "FREEZE!!!"
    playersDecks.children[players.indexOf(player)].innerHTML = player.toHTML()
    window.player = nextPlayer()
}

function nextPlayer(){
    let player = window.player
    let playerIndex = players.indexOf(player);
    let nextPlayerIndex = playerIndex + 1;
    let playersChecked = 0;
    let foundPlayer = false;

    while (foundPlayer != true){
        if (nextPlayerIndex > players.length) {
            nextPlayerIndex = 0
            }
        if (players[nextPlayerIndex].status == "PLAYING"){
            window.player = players[nextPlayerIndex]
            console.log("NEXT:" + window.player)
            foundPlayer = true
        } else if (playersChecked === players.length){
            checkWinners()
            foundPlayer = true 
        } else {
            nextPlayerIndex++
            playersChecked++
        }
    }
}

function checkWinners(){
    let scores = []

    players.forEach(player => { 
        let playerScore = 21 - player.deck.value
        if (playerScore < 0){
            playerScore = 1000
        }
        scores.push(playerScore)
    })

    let areWinners = scores.some(v => v < 21)

    if (areWinners){
        let minValue = Math.min(...scores)
        players.forEach(player => {  
            if ((21 - player.deck.value) === minValue){
                winners.innerText += `${player.name} WINS ${player.deck.value/21 * 1000}$`
                player.cash += (player.deck.value/21 * 1000)
            }
        })
    } else {
        winners.innerText = "NO WINNERS THIS ROUND!"
    }
}
