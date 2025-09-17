import { Injectable } from '@angular/core';
import { EventItem } from '../models/EventItem';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

const initialEvents: EventItem[] = [
  {
    id: 1,
    title: 'Music Concert',
    date: new Date(2025, 8, 20, 19, 9).toISOString(),
    description: 'Enjoy a night full of live performances by top artists.',
    mediaName: 'satyam.jpg',
    mediaType: 'image/jpeg',
    mediaDataUrl: 'assets/satyam.jpg'
  },
  {
    id: 2,
    title: 'Drama Festival',
    date: new Date(2025, 8, 25, 17, 0).toISOString(),
    description: 'A festival of local and national theatre productions.',
    mediaName: 'satyam1.jpeg',
    mediaType: 'image/jpeg',
    mediaDataUrl: 'assets/satyam1.jpeg'
  },
  {
    id: 3,
    title: 'Art Exhibition',
    date: new Date(2025, 8, 28, 11, 0).toISOString(),
    description: 'Explore modern art by top artists.',
    mediaName: 'satyam2.jpg',
    mediaType: 'image/jpeg',
    mediaDataUrl: 'assets/satyam2.jpg'
  }
  
];

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsSubject = new BehaviorSubject<EventItem[]>(initialEvents);
  events$ = this.eventsSubject.asObservable();
  private idCounter = initialEvents.length + 1;

  getSnapshot(): EventItem[] {
    return this.eventsSubject.value;
  }

  addEvent(event: EventItem) {
    const newEvent = { ...event, id: this.idCounter++ };
    this.eventsSubject.next([...this.getSnapshot(), newEvent]);
    console.log(this.eventsSubject)
  }

  updateEvent(id: number, updates: Partial<EventItem>) {
    const updatedEvents = this.getSnapshot().map(ev => ev.id === id ? { ...ev, ...updates } : ev);
    this.eventsSubject.next(updatedEvents);
  }

  deleteEvent(id: number) {
    this.eventsSubject.next(this.getSnapshot().filter(ev => ev.id !== id));
  }

  downloadMedia(item: EventItem) {
    if (!item.mediaDataUrl) return;

    if (item.mediaDataUrl.startsWith('data:')) {
      const a = document.createElement('a');
      a.href = item.mediaDataUrl;
      a.download = item.mediaName || `${item.title}-media`;
      a.click();
      return;
    }
    fetch(item.mediaDataUrl)
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = item.mediaName || `${item.title}-media`;
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch(err => console.error('Download failed', err));
  }
}

