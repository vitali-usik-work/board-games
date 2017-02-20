import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Main } from './containers';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Main
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
