import Deck from './deck.js';

class Player{
    
    constructor(name){
        this.name = name;
        this.cash = 5000;
        this.status = "PLAYING";
        this.deck = new Deck();
    }

    takeRandomCard(mace){
        let i = Math.floor(Math.random() * (mace.cards.length)); //Selects a random number
        this.deck.cards.push(mace.cards[i]); //Takes a random card from the Mace
        mace.cards.splice(i, 1); //Eliminates the card from the Mace
    }

    takeStartingDeck(mace){
        while (this.deck.cards.length < 2){
            this.takeRandomCard(mace);
        }
    }

    updateStatus(){
        if (this.deck.getDeckValue() === 21){
            this.status = "BLACKJACK!!!";
        }else if (this.deck.getDeckValue() > 21){
            this.status = "LOST!!!";
            this.cash -= 1000;
        }
    }

    toHTML(){
        let playerFormat = `<div class='player' id="${this.name}">`
        playerFormat = playerFormat.concat("<div class='deck'>",this.deck.toHTML(),"</div>")
        playerFormat = playerFormat.concat("<div class='info'>",this.name,"</div>")
        playerFormat = playerFormat.concat("<div class='info'>",this.status,"</div>")
        playerFormat = playerFormat.concat("<div class='info'>",this.cash,"</div>")
        playerFormat = playerFormat.concat("</div>")
        return playerFormat
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


export default Player;