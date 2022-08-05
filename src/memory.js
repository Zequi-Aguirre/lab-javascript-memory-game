class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // shuffleCards() {
  //   // ... write your code here
  //   if(!this.cards){
  //     return undefined;
  //   }
    
  //   let newArr = [];
  //   for(let i = 0 ; i < this.cards.length; i++){
  //     const randomIndex = Math.floor(Math.random() * this.cards.length);
  //     // console.log(this.cards);
  //     // console.log(newArr);
  //     if (!newArr.includes(this.cards[randomIndex])){
  //       // console.log(newArr.push(this.cards[randomIndex]))
  //       newArr.push(this.cards[randomIndex])
  //     }
  //   }
    
  //   this.cards = newArr
  
  // }

  shuffleCards() {
    if(!this.cards){
        return undefined;
      }
    const shuffledArray = this.cards.sort((a, b) => 0.5 - Math.random());
      this.cards = shuffledArray;
  }


  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if(card1 === card2) {
      this.pairsGuessed++;
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed == 12) {
      return true;
    } else {
      return false
    }
  
  }
}
