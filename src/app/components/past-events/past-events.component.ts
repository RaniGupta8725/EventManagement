import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { EventItem } from 'src/app/models/EventItem';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent {
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



