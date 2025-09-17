import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { EventItem } from 'src/app/models/EventItem';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css']
})
export class ManageEventsComponent {
form: FormGroup;
  events$ = new BehaviorSubject<EventItem[]>([]);
   dataSource = new MatTableDataSource<EventItem>();

  previewDataUrl: string | null = null;
  editingId: number | null = null;

  

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['']
    });
  }
onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => this.previewDataUrl = reader.result as string;
      reader.readAsDataURL(file);
    }
  }
  save() {
    if (this.form.invalid) return;

    const newEvent: EventItem = {
      id: Date.now(),
      ...this.form.value,
      mediaDataUrl: this.previewDataUrl || undefined
    };

    this.eventService.addEvent(newEvent);
     const updatedEvents = [...this.events$.value, newEvent];
    this.events$.next(updatedEvents);
     this.dataSource.data = updatedEvents;

    this.resetForm();
  }

  resetForm() {
    this.form.reset();
    this.previewDataUrl = null;
  }

  edit(e: EventItem) {
    this.editingId = e.id;
    this.form.patchValue({
      title: e.title,
      date: e.date,
      description: e.description
    });
    this.previewDataUrl = e.mediaDataUrl || null;
  }

  delete(id: number) {
    const updated = this.events$.value.filter(e => e.id !== id);
    this.events$.next(updated);
  }

  download(e: EventItem) {
    if (!e.mediaDataUrl) return;
    const link = document.createElement('a');
    link.href = e.mediaDataUrl;
    link.download = e.title;
    link.click();
  }

  

}
