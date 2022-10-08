import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  allCards = ['2C', '2D', '2H', '2S',
                    '3C', '3D', '3H', '3S',
                    '4C', '4D', '4H', '4S',
                    '5C', '5D', '5H', '5S',
                    '6C', '6D', '6H', '6S',
                    '7C', '7D', '7H', '7S',
                    '8C', '8D', '8H', '8S',
                    '9C', '9D', '9H', '9S',
                    '10C', '10D', '10H', '10S',
                    'JC', 'JD', 'JH', 'JS',
                    'QC', 'QD', 'QH', 'QS',
                    'KC', 'KD', 'KH', 'KS',
                    'AC', 'AD', 'AH', 'AS'];
  
  gameActive = false;
  userCards = [];
  dealerCards = [];
  userScore = 0;
  dealerScore = 0;
  availableCards= [];
  gameResult = "";
  wallet = 1000;
  bet = 10;

  reset(){
    this.availableCards = this.allCards.slice();
    this.gameActive = false;
    this.userCards = [];
    this.dealerCards = [];
    this.userScore = 0;
    this.dealerScore = 0;
    this.gameResult = "";
  }

  constructor() { 
    this.availableCards = this.allCards.slice();
  }

  getRandomCard(identity){
    let randomCard = this.availableCards.splice(Math.floor(Math.random()*this.availableCards.length),1)[0];
    let cardScore:number = this.getCardScore(randomCard, identity);
    if(identity === 'dealer'){
      this.dealerCards.push(randomCard);
      this.dealerScore += cardScore;
    }
    else{
      this.userCards.push(randomCard);
      this.userScore += cardScore;
    }

  }

  getCardScore(cardID, identity){
    let score = 0;
    let cardValue = 0;
    if(identity === 'dealer'){
      score = this.dealerScore;
    }
    else{
      score = this.userScore;
    }
    let royalCards = ['JC', 'JD', 'JH', 'JS',
                      'QC', 'QD', 'QH', 'QS',
                      'KC', 'KD', 'KH', 'KS'
                      ];
    let aceCards = ['AC', 'AD', 'AH', 'AS'];
    if(royalCards.includes(cardID)){
      cardValue =  10;
    }
    else if(aceCards.includes(cardID)){
      cardValue = 11;
      if(score + cardValue > 21){
        cardValue = 1;
      }
    }
    else{
      console.log(cardID);
      cardValue = parseInt(cardID.substring(0, cardID.length-1));
    }
    //score = score + cardValue;
    return cardValue;
  }

  playAudio(src){
  let audio = new Audio();
  audio.src = src;
  audio.load();
  audio.play();
}
}
