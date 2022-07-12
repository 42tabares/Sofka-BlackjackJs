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
            player.showCards()
        });
    }

    playRound(mace){
        this.players.forEach(player => {
            if (player.isPlaying && player.isHuman){
                let takeCard = prompt(`will ${player.name} take a card? (Y/N)> `)
                if (takeCard == "Y"){
                    player.takeRandomCard(mace)
                    player.showCards()
                } else {
                    player.isPlaying = false
                    console.log(player.name + " GETS OUT OF THE GAME!")
                }
            }
        })
        console.log("\n")
        this.checkPlayersStatus()
    }

    checkWinners(){
        //PENDING REFACTOR
    }

}

module.exports = Round;