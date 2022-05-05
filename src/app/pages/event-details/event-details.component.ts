import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service'
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  constructor(
    private eventService: EventService, 
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  event: any

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")+''
    this.event = this.eventService.getEventById(id)
  }

  back(){
    this.router.navigateByUrl('');
  }

}
