let Card = require('./card.js');

class Deck{
    
    constructor(){
        this.cards = []
    }

    buildPlayingDeck(){
        let names = ["2","3","4","5","6","7","8","9","10","Jester","King","Queen","Ace"]
        let courts = ["Hearts","Spades","Diamonds","Clovers"]

        for (let i = 0; i < names.length; i++){
            for (let j = 0; j < courts.length; j++){
                let card = new Card(names[i] + " of " + courts[j])
                this.cards.push(card)
            }
        }
    }
}


module.exports = Deck;