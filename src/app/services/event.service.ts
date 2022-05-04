import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, of} from 'rxjs'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EventService {


  constructor(private http: HttpClient) { }

  private _events$: any = new BehaviorSubject('')
  public events$: any = this._events$.asObservable()
  
  public loadEvents(): void{
     this._queryEvents().subscribe((res:any)=> this._events$.next(res._embedded.events))
  }
  
  private _queryEvents(){
    return of({_embedded:{
      'events':[{name:'x',url:'y'}]
    }})
   
//  return this.http.get("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=C0BRd57nGzEyWfVUxb5goo7XKwkGdZFA")
  }
}


