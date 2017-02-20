import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Main } from './containers';
import { AppBar } from './ui';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Main,
    AppBar
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
