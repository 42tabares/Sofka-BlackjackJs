let prompt = require('prompt-sync')();
let Deck = require('./Deck.js');

class Round{
    
    constructor(listOfPlayers){
        this.players = listOfPlayers
        this.playing = true
        this.startPlayersStatus()
    }

    startPlayersStatus(){
        this.players.forEach(player => {
            if (player.cash > 0){
                player.isPlaying = true;
            }
        })
    }

    startGame(mace){
        this.players.forEach(player => {
            player.deck = new Deck()
            player.takeStartingDeck(mace)
            player.showCards()
        });
    }

    playRound(mace){
        this.players.forEach(player => {
            if (player.isPlaying){
                let takeCard = prompt(`will ${player.name} take a card? (Y/N)> `)
                if (takeCard == "Y"){
                    player.takeRandomCard(mace)
                    player.showCards()
                } else {
                    console.log(`\n${player.name} FREEZES !!! \n`)
                    player.isPlaying = false
                }
            }
        })
        console.log("\n")
        this.checkForStop()
    }

    checkForStop(){
        let playersStatus = []
        this.players.forEach(player => {
            playersStatus.push(player.isPlaying)
        })
        if(!playersStatus.includes(true)){
            this.playing = false
        }
    }

    returnWinners(){
        let scores = []

        this.players.forEach(player => { 

            let playerScore = 21 - player.deck.value
            if (playerScore < 0){
                playerScore = 1000
            }
            scores.push(playerScore)
        })

        let areWinners = scores.some(v => v < 21)

        if (areWinners){
            let minValue = Math.min(...scores)
            this.players.forEach(player => {  
                if (player.deck.value == minValue){
                    console.log(`${player.name} WINS 1000\$ \n`)
                    player.cash += 1000
                }
            })
        } else {
            console.log("NO WINNERS THIS ROUND! \n")
        }
    }

    displayCash(){
        this.players.forEach(player => {
            console.log(`${player.name}'s CASH: ${player.cash}\n`)
        })    
    }
}
module.exports = Round;