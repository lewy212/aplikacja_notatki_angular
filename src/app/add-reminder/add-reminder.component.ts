import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface ReminderData {
  date: string;
  time: string;
}

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.css']
})
export class AddReminderComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddReminderComponent>,@Inject(MAT_DIALOG_DATA) public data: ReminderData) {
  }


  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
