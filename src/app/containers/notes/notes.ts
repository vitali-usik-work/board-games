import { Component } from '@angular/core';

@Component({
  selector: 'note-container',
  templateUrl: 'notes.html',
  styleUrls: ['notes.css']
})
export class NotesContainer {
  notes = [
    {
    title: 'this is note',
    value: 'eat some food',
    color: 'lightblue'
    },
    {
      title: 'note 2',
      value: 'eat some food',
      color: 'lightblue'
    },
    {
      title: 'another note',
      value: 'eat some food',
      color: 'lightblue'
    }
  ];

  onNoteChecked(i: number) {
    this.notes.splice(i, 1);
  }

  onCreateNote(note: any) {
    this.notes.push(note);
  }
};
