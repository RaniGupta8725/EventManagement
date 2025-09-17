import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { ManageEventsComponent } from './components/manage-events/manage-events.component';
import { PastEventsComponent } from './components/past-events/past-events.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingEventsComponent,
    ManageEventsComponent,
    PastEventsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
