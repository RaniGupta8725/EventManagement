import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { EventDetailsDialogComponent } from 'src/app/event-details-dialog/event-details-dialog.component';
import { EventItem } from 'src/app/models/EventItem';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent {
events$: Observable<EventItem[]>;

  constructor(private eventService: EventService,private dialog: MatDialog) {
    this.events$ = this.eventService.events$;
  }
  

  download(e: EventItem) {
    this.eventService.downloadMedia(e);
  }
    @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -250, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 250, behavior: 'smooth' });
  }
  viewDetails(event: any) {
    this.dialog.open(EventDetailsDialogComponent, {
      data: event,
      width: '600px'
    });
  }
}
