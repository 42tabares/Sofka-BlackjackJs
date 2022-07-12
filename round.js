let Deck = require('./deck.js');
const Player = require('./player.js');
let prompt = require('prompt-sync')();

class Round{
    
    constructor(listOfPlayers){
        this.players = listOfPlayers
        this.playersStatus = []
        this.checkPlayersStatus()
    }

    checkPlayersStatus(){
        this.playersStatus = []
        this.playersStatus.forEach(player => {
            this.playersStatus = this.playersStatus.push(player.isPlaying)
        });
    }

    startGame(mace){
        this.players.forEach(player => {
            player.takeStartingDeck(mace)
            player.deck.displayDeck()
        });
    }

    playRound(mace){
        this.players.forEach(player => {
            if (player.isPlaying && player.isHuman){
                let takeCard = prompt(`will ${player.name} take a card? (Y/N)>`)
                if (takeCard == "Y"){
                    player.takeRandomCard(mace)
                    player.checkStatus()
                } else {
                    player.isPlaying = false
                }
            } else if (player.isPlaying) {
                player.takeCardAI(mace)
                player.checkStatus()
            }
        })
        this.checkPlayersStatus()
    }

    checkWinners(){
        if (this.playersStatus[0] === false){
            console.log("\n THE HOUSE LOSES!! \n")
        } 
        else if (this.playersStatus.includes(true)){
            this.players.forEach(player => {
                if (player.isPlaying){
                    console.log(`${player.name} WINS 1000$!`)
                    player.cash += 1000;
                }
            })
        }
        else{
            console.log(" NO WINNERS! ")
        }
    }

}

module.exports = Round;