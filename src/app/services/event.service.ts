import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  private EVENT_KEY: string = 'event_db';

  private _events$: any = new BehaviorSubject('');
  public events$: any = this._events$.asObservable();

  public async loadEvents(filter: string = ''): Promise<void> {
    let events = this.storageService.loadFromStorage(this.EVENT_KEY);
    let filterdEvents;
    if (!events) {
      events = await this._queryEvents();
      events = events._embedded.events;
    }
    filterdEvents = events;
    if (filter) {
      filterdEvents = this._filter(events, filter);
    }
    this.storageService.saveToStorage(this.EVENT_KEY, events);
    this._events$.next(filterdEvents);
  }

  private _queryEvents() {
    return this.http
      .get(
        'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=C0BRd57nGzEyWfVUxb5goo7XKwkGdZFA'
      )
      .toPromise();
  }

  public getEventById(id: string) {
    return this._events$.value.find((event: any) => event.id === id);
  }

  private _filter(events: any, term: string) {
    if (!term) return this._events$;
    term = term.toLocaleLowerCase();

    return events.filter((event: any) => {
      return event.name.toLocaleLowerCase().includes(term);
    });
  }
}
