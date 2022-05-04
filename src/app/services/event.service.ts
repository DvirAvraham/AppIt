import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, of} from 'rxjs'
import { map } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';



@Injectable({
  providedIn: 'root'
})

export class EventService {


  constructor(private http: HttpClient, private storageService: StorageService) { }

  private EVENT_KEY: string = "event_db"

  private _events$: any = new BehaviorSubject('')
  public events$: any = this._events$.asObservable()
  
  public loadEvents(): void{
    let events = this.storageService.loadFromStorage(this.EVENT_KEY)
    if (!events) {
     this._queryEvents().subscribe((res:any)=> {
       this._events$.next(res._embedded.events)
     this.storageService.saveToStorage(this.EVENT_KEY, res._embedded.events)
     })
     return
    }
    this.storageService.saveToStorage(this.EVENT_KEY,events)
    this._events$.next(events)
      
  }
  
  private _queryEvents(){
    return this.http.get("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=C0BRd57nGzEyWfVUxb5goo7XKwkGdZFA")
  }
}


