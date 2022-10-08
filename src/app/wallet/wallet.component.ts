import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../services/card-data-service.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(public cardData: CardDataService) { }

  ngOnInit(): void {
  }

  placeBet(){
    if(this.cardData.bet == null){
      return;
    }
    if(this.cardData.wallet < this.cardData.bet){
      return;
    }
    this.cardData.gameActive = true;
    this.cardData.getRandomCard('user');
    this.cardData.getRandomCard('dealer');
    this.cardData.getRandomCard('user');
    this.cardData.playAudio("./assets/audio/198234__everythingsounds__credit-card-swipe.wav");
    //this.cardData.wallet -= this.cardData.bet;
    if(this.cardData.userScore > 21){
      this.cardData.gameResult = "Derrotado";
      
      this.cardData.reset();
    }
  }

  validateInput(event){
    if (event.target.validity.valid){
      if(event.target.value > this.cardData.wallet){
        event.target.value = '';
      }
      if(event.target.value === ''){
        event.target.value = '';
      }
      
    }
    else{
      event.target.value = '';
    }


}

}
