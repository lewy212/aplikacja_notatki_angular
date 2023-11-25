import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../Note";
import {MatDialog} from "@angular/material/dialog";
import {AddReminderComponent} from "../add-reminder/add-reminder.component";

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
  editAmount: boolean;
  constructor(public dialog: MatDialog) {
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
  openDialog():void{
    let dialogRef = null;
    dialogRef = this.dialog.open(AddReminderComponent,{
      width:'30%',
      data:{date: this.note.date,time: this.note.time}
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result !==undefined){
        if(result.time!=='' && result.date !==''){
          this.note.date = new Date(result.date);
          this.note.time = result.time;
        }
      }
    })
  }

  getStatus():boolean {
    return this.note.status;
  }
}
