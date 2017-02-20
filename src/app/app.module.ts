import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  Main,
  NotesContainer
} from './containers';
import { AppBar } from './ui';
import { NoteCard } from './components/index';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Main,
    AppBar,
    NoteCard,
    NotesContainer
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
