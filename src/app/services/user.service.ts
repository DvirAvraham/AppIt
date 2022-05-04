import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {User} from '../models/user.model'

@Injectable({
  providedIn: 'root'
})

export class UserService {
 USER: User = 
  {
    name: "Dvir Avraham",
    coins: 100,
    moves: []
   }


  constructor() { }

  private _user$ = new BehaviorSubject<User>(this.USER);
  public user$ = this._user$.asObservable();

  getUser(){
    return this.user$
  }

}
