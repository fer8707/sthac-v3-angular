import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavIconsComponent } from './components/home/nav-icons/nav-icons.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavIconsComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
