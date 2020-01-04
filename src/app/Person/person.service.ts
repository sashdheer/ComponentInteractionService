import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Person, IPerson } from './iperson';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
   personList: IPerson[] = [];
  constructor() { }

  // persons = new EventEmitter();
 // persons = new Subject(); // This is a diffent way of emitting
  addPerson(person: IPerson) {
    this.personList.push(person);
  }
}
