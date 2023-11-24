import {Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import {Notes} from "../notes-mock";
import {Note} from '../Note';
import {MatDialog} from "@angular/material/dialog";
import {AddNoteComponent} from "../add-note/add-note.component";
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  noteList = Notes;
  headers: string[]=[];

  @ViewChild('pierwszyDiv') pierwszyDiv: ElementRef;
  @ViewChild('drugiDiv') drugiDiv: ElementRef;
  selectedNote: Note = null;
  private newNote: Note;

  constructor(public dialog: MatDialog) {
    this.noteList.forEach(el=>{
      const keys = Object.keys(el);
      keys.forEach(key =>{
        if(!this.headers.includes(key)){
          this.headers.push(key);
        }
      });
    });
  }

  ngOnInit(): void {
  }

  @HostListener('window:click', ['$event'])
  handleKeyDown(event: Event) {
    if (
      !this.pierwszyDiv.nativeElement.contains(event.target) &&
      !this.drugiDiv?.nativeElement.contains(event.target)
    ) {
      this.selectedNote = null;
    }
  }
  onSelect(note: Note):void{
    this.selectedNote = note;
  }
  openDialog():void{
    let dialogRef = null;
    dialogRef = this.dialog.open(AddNoteComponent,{
      width: '30%',
      data: {title: '',category: '',content: '',date: '', time: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){

        this.newNote = new Note(result.title,result.category,result.content,new Date(result.date),result.time);
        this.noteList.push(this.newNote);
      }
    });
  }
}
