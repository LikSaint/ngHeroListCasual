import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesApi} from './heroesApi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    HeroesApi,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
