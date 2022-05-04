import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.scss']
})
export class EventPreviewComponent implements OnInit {

  constructor() { }

  @Input() event: any


  ngOnInit(): void {
  }

}
