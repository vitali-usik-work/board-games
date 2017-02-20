import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { App } from './app';
import { Main, NotesContainer } from './containers';
import { AppBar } from './ui';
import { NoteCard } from './components/index';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    App,
    Main,
    AppBar,
    NoteCard,
    NotesContainer
  ],
  bootstrap: [ App ]
})

export class AppModule { }
