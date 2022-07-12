let Deck = require('./deck.js');

class Player{
    
    constructor(name){
        this.name = name;
        this.deck = new Deck();
    }

    takeRandomCard(mace){
        let i = Math.floor(Math.random() * (mace.cards.length+1)); 
        this.deck.cards.push(mace.cards[i]);
        mace.cards.splice(i, 1);
    }

    takeStartingDeck(mace){
        while (this.deck.cards.length < 2){
            this.takeRandomCard(mace)
        }
    }

}

module.exports = Player;