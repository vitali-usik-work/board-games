import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-card',
  templateUrl: 'note-card.html',
  styleUrls: ['note-card.css']
})
export class NoteCard {
  @Input() note = {};
  @Output() checked = new EventEmitter();


  showCheck: boolean = false;

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    console.log('note clicked');
    this.checked.next(this.note);
  }
};
