// https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/#Unrelated-Components-Sharing-Data-with-a-Service


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
