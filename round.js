let prompt = require('prompt-sync')();

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
                    console.log(player.name + " FREEZES !!!")
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
            if (player.deck.value <= 21){
                let score = 21 - player.deck.value
                scores.push(score)
            }
        })
        if (scores !== []) {
            let minValue = Math.min(...scores)
            let winner = scores.indexOf(minValue)
            console.log(this.players[winner].name + " WINS 1000$ \n")
        } else {
            console.log("NO WINNERS THIS ROUND! \n")
        }
    }
}

module.exports = Round;