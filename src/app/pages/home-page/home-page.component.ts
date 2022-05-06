import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private eventService: EventService) {}

  events$!: Observable<object[]>;
  subscription!: Subscription;

  ngOnInit(): void {
    this.loadEvents('');
    this.subscription = this.eventService.events$.subscribe((res: any) => {
      this.events$ = res;
    });
  }

  loadEvents(filter: string) {
    this.eventService.loadEvents(filter);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
