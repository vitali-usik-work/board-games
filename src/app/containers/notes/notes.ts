import { Component } from '@angular/core';

@Component({
  selector: 'note-container',
  templateUrl: 'notes.html',
  styleUrls: ['notes.css']
})
export class NotesContainer {
  note = {
    title: 'this is note',
    value: 'eat some food'
  }
};
