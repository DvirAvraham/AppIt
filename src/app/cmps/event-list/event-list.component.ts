import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor() { }

  @Input() events: any

  ngOnInit(): void {
  }

}
