let Deck = require('./deck.js');

class Player{
    
    constructor(name){
        this.name = name;
        this.cash = 5000;
        this.isPlaying = true;
        this.deck = new Deck();
    }

    takeRandomCard(mace){
        let i = Math.floor(Math.random() * (mace.cards.length)); //Selects a random number
        this.deck.cards.push(mace.cards[i]); //Takes a random card from the Mace
        mace.cards.splice(i, 1); //Eliminates the card from the Mace
    }

    takeStartingDeck(mace){
        while (this.deck.cards.length < 2){
            this.takeRandomCard(mace)
        }
    }

    showCards(){
        console.log(this.name + "'s DECK:")
        this.deck.displayDeck()
        if (this.deck.value > 21){
            console.log(`${this.name} got ELIMINATED and lost 1000$!!! \n`)
            this.isPlaying = false
            this.cash -= 1000
        } else if (this.deck.value == 21){
            console.log(`${this.name} got a ♤ ♡ BLACKJACK ♢ ♧ \n`)
            this.isPlaying = false
        }
    }

/*
    AI players couldn't be implemented due to short time for delivery :(
    // This function simulates an AI player choosing if he should get a card from the mace
    // The closer the deck is to 21, the less likely is to choose it
    takeCardAI(mace){
        let risk = this.deck.value - 11
        let willTake = false
        if (risk < 0){
            willTake = true
        } else {
            let choiceFactor = 6 + Math.floor(Math.random() * (11))
            if (risk < choiceFactor){
                willTake = true
            }
        }
        if (willTake === true){
            this.takeRandomCard(mace)
        }
    }
*/
}


module.exports = Player;