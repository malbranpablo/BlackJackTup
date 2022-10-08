import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './main-area/card/card.component';
import { MainAreaComponent } from './main-area/main-area.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
