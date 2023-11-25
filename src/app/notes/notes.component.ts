import {Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import {Notes} from "../notes-mock";
import {Note} from '../Note';
import {MatDialog} from "@angular/material/dialog";
import {AddNoteComponent} from "../add-note/add-note.component";
import {EditNoteComponent} from "../edit-note/edit-note.component";
import {StatusNote} from "../StatusNote";
import {ShoppingListNote} from "../ShoppingListNote";
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
  private otwarte: boolean = false;
  private newNote: Note;
  @ViewChild('trzeciDiv') trzeciDiv: ElementRef;

  constructor(public dialog: MatDialog) {
    this.noteList.forEach(el=>{
      const keys = Object.keys(el);
      keys.forEach(key =>{
        if(!this.headers.includes(key)){
          if(key!=='amount'){
            this.headers.push(key);
          }

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
      !this.drugiDiv?.nativeElement.contains(event.target)&&
      this.otwarte ==false
    ) {
      this.selectedNote = null;
    }
  }
  onSelect(note: Note):void{
    this.selectedNote = note;

  }
  openDialog(add: boolean, edit: boolean):void{
    this.otwarte=true;
    let dialogRef = null;
    if(add){
      dialogRef = this.dialog.open(AddNoteComponent,{
        width: '30%',
        data: {title: '',category: '',content: '',date: '', time: ''}
      });
    }
    if(edit){

      dialogRef = this.dialog.open(EditNoteComponent,{
        width: '30%',
        data: {title: this.selectedNote.title,category:  this.selectedNote.category,content:  this.selectedNote.content,date:  this.selectedNote.date, time:  this.selectedNote.time}
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        if(result.time==='' || result.date===''){
          result.date = new Date();
          result.time = '';
        }
        if(result.category==='To do'){
          this.newNote = new StatusNote(result.title,result.content,new Date(result.date),false,result.time);
        }else {
          if(result.category==='Shopping list'){
            this.newNote = new ShoppingListNote(result.title,result.content,new Date(result.date),(this.selectedNote as ShoppingListNote).amount,result.time);
          }else {
            this.newNote = new Note(result.title,result.category,result.content,new Date(result.date),result.time);
          }
        }
        if(add){
          this.noteList.push(this.newNote);
        }
        if(edit){
          console.log(this.newNote.date)
          this.noteList.forEach((obj,index,tab)=>{
            console.log(this.selectedNote)
            if(obj===this.selectedNote){
              tab[index]=this.newNote;
              this.selectedNote = tab[index];
            }
          });
        }

      }
      this.otwarte=false;
    });
  }

  changeStatus() {
  this.selectedNote.status=!this.selectedNote.status;
  }

  deleteNote() {
  this.noteList = this.noteList.filter(obj => obj !== this.selectedNote);
  this.selectedNote = null;
  }
}
