import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../Note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() note: Note;
  @Output() changeNoteStatus: EventEmitter<void> = new EventEmitter();
  @Output() deleteNote: EventEmitter<void> = new EventEmitter();
  @Output() editNote: EventEmitter<void> = new EventEmitter();
  constructor() {
  }
  ngOnInit():void{

  }
  changeStatus(): void{
    this.changeNoteStatus.emit();
  }
  deleteSelectedNote(): void{
    this.deleteNote.emit();
  }
  editSelectedNote():void{
    this.editNote.emit();
  }

  getStatus():boolean {
    return this.note.status;
  }
}
