import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EventItem } from 'src/app/models/EventItem';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent {
events$: Observable<EventItem[]>;

  constructor(private eventService: EventService) {
    this.events$ = this.eventService.events$;
  }
   viewDetails(e: EventItem) {
    alert(`${e.title}\n${new Date(e.date).toLocaleString()}\n\n${e.description || ''}`);
  }

  download(e: EventItem) {
    this.eventService.downloadMedia(e);
  }
}
