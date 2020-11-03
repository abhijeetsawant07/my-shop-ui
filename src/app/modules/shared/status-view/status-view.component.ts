import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Status } from 'src/app/enums/status.enum';

@Component({
  selector: 'app-status-view',
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.scss']
})
export class StatusViewComponent implements OnInit, OnChanges {

  @Input()
  status: string;

  isOrdered = false;
  isShipped = false;
  isDelivered = false;

  constructor() { }

  ngOnInit(): void {
    this.evaluateStatus();
  }

  ngOnChanges() {
    this.evaluateStatus();
  }

  evaluateStatus() {
    if (this.status == Status[Status.ordered]) {
      this.isOrdered = true;
    } else if (this.status == Status[Status.shipped]) {
      this.isOrdered = true;
      this.isShipped = true;
    } else if (this.status == Status[Status.delivered]) {
      this.isOrdered = true;
      this.isShipped = true;
      this.isDelivered = true;
    }
  }

}
