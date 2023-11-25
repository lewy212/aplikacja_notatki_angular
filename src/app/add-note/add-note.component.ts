import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Note} from "../Note";
import {Categories} from "../notes-mock";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent implements OnInit{
  categoryList: string[];
  constructor(public dialogRef: MatDialogRef<AddNoteComponent>,@Inject(MAT_DIALOG_DATA) public data: Note) {
  }
ngOnInit() {
    this.categoryList=Categories;
}
onNoClick():void{
    console.log();
    this.dialogRef.close();
}
}
