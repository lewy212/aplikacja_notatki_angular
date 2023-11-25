import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Note} from "../Note";
import {AddNoteComponent} from "../add-note/add-note.component";

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<AddNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: Note) {
  }
  ngOnInit() :void{
  }
  onNoClick():void{
    this.dialogRef.close();
  }

}
