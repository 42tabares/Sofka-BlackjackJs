class Card{
    
    constructor(name){
        this.name = name
    }

    getValue(currentDeckValue){
        
        let cardType = this.name.split(" ");
        cardType = cardType[0];
        
        switch(cardType){
            case("A"):
                if ((currentDeckValue + 11) > 21){
                    return 1;
                }else{
                    return 11;
                }
            case("K"):
            case("Q"):
            case("J"):
                return 10;
            default:
                return Number(cardType);
        }
    }

}


export default Card;