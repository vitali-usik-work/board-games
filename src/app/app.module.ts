import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { Main, NotesContainer } from './containers';
import { AppBar, NoteCreator } from './ui';
import { NoteCard } from './components/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    App,
    Main,
    AppBar,
    NoteCard,
    NotesContainer,
    NoteCreator
  ],
  bootstrap: [ App ]
})

export class AppModule { }
