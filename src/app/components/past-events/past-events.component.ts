import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { EventItem } from 'src/app/models/EventItem';
import { EventService } from 'src/app/services/event.service';
declare var bootstrap: any; 
@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent {
events$: Observable<EventItem[]>;
 selectedEvent: any = null;
  constructor(private eventService: EventService) {
    this.events$ = this.eventService.events$;
  }
  


viewDetails(event: any) {
 console.log("satyam");
}
  download(e: EventItem) {
    this.eventService.downloadMedia(e);
  }
   @ViewChild('scrollContainerPast', { read: ElementRef }) scrollContainerPast!: ElementRef;

  scrollLeftPast() {
    this.scrollContainerPast.nativeElement.scrollBy({ left: -250, behavior: 'smooth' });
  }

  scrollRightPast() {
    this.scrollContainerPast.nativeElement.scrollBy({ left: 250, behavior: 'smooth' });
  }
}



