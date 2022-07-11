class Card{
    
    constructor(name){
        this.name = name
    }

    getValue(playerscore){
        
        let cardType = this.name.split(" ");
        cardType = cardType[0];
        
        switch(cardType){
            case("Ace"): 
                if (playerscore + 11 > 21){
                    return 1;
                }else{
                    return 11;
                }
            case("King"):
            case("Queen"):
            case("Jester"):
                return 10;
            default:
                return Number(cardType);
        }
    }

}


module.exports = Card;