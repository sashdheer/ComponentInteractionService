import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  // persons = new EventEmitter();
  persons = new Subject(); // This is a diffent way of emitting

}
