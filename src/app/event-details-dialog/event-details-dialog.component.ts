import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-details-dialog',
  templateUrl: './event-details-dialog.component.html',
  styleUrls: ['./event-details-dialog.component.css']
})
export class EventDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EventDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }

}
