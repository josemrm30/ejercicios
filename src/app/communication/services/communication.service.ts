import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommunicationService {

  private _sonMessage: string = "Son Using Service";
  private _parentMessage: string = "Parent Using Service";
  private _sonMsg: string = "Son Using Subject";
  private _parentMsg: string = "Parent Using Subject";
  private _sonSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(this._sonMsg);
  private _parentSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(this._parentMsg);



  get parentMessage() {
    return this._parentMessage;
  }
  get sonMessage() {
    return this._sonMessage;
  }
  
  get parentSubject() {
    return this._parentSubject$.asObservable();
  }
  get sonSubject() {
    return this._sonSubject$.asObservable();
  }
  
}
