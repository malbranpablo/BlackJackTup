import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../services/card-data-service.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {

  constructor(public cardData: CardDataService) { }

  ngOnInit(): void {
  }

}
