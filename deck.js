let Card = require('./card.js');

class Deck{
    
    constructor(){
        this.cards = []
        this.value = 0
    }

    buildMaceDeck(){
        let names = ["2","3","4","5","6","7","8","9","10","Jester","King","Queen","Ace"]
        let courts = ["Hearts","Spades","Diamonds","Clovers"]

        for (let i = 0; i < names.length; i++){
            for (let j = 0; j < courts.length; j++){
                let card = new Card(names[i] + " of " + courts[j])
                this.cards.push(card)
            }
        }
    }

    getDeckValue(){
        this.value = 0
        for(let i = 0; i < this.cards.length; i++){
            //Below we must pass current's deck value to getValue() so it can assign a proper value to an Ace card if needed!
            let cardValue = this.cards[i].getValue(this.value)  
            this.value += cardValue;
        }
        return this.value
    }

    // Method for nicely displaying User's Deck
    displayDeck(){
        let deckDisplay = "♤ ♡  // ";
        for(let i = 0; i < this.cards.length; i++){
            deckDisplay = deckDisplay.concat(this.cards[i].name," // ")
        }
        deckDisplay = deckDisplay.concat(" ♢ ♧")
        console.log(deckDisplay);
        console.log("Deck Value = " + this.getDeckValue() + "\n")
    }


}


module.exports = Deck;