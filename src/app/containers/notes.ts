import { Component } from '@angular/core';

@Component({
  selector: 'note-container',
  templateUrl: 'note-container.html',
  styleUrls: ['note-container.css']
})
export class NotesContainer {
  note = {
    title: 'this is note',
    value: 'eat some food'
  }
};
