import { Component, OnInit } from '@angular/core';
import { CardDataService } from './services/card-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  availableCards = [];
  dealerCards = [];
  userCards = [];
  gameActive = false;
  userScore = 0;
  dealerScore = 0;

  constructor(public cardData: CardDataService) { }

  ngOnInit() {
    this.availableCards = this.cardData.allCards;
  }

  hitCard(){
    
    this.userCards.push(this.availableCards.splice(Math.floor(Math.random()*this.availableCards.length),1));
  }

  stayCard(){
    this.dealerCards.push(this.availableCards.splice(Math.floor(Math.random()*this.availableCards.length),1));
  }

}