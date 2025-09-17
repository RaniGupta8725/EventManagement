import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { ManageEventsComponent } from './components/manage-events/manage-events.component';
import { PastEventsComponent } from './components/past-events/past-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsDialogComponent } from './event-details-dialog/event-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingEventsComponent,
    ManageEventsComponent,
    PastEventsComponent,
    EventDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,   // 👈 required for Material
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,

     
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
