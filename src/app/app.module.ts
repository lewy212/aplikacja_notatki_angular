import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NoteComponent } from './note/note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogModule, MatDialogTitle} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatCardModule} from "@angular/material/card";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import { CategoryPrintDirective } from './category-print.directive';
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import { AddReminderComponent } from './add-reminder/add-reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNoteComponent,
    EditNoteComponent,
    NoteComponent,
    CategoryPrintDirective,
    AddReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatInputModule,
    MatSelectModule,
    MatDialogActions,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
