import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Person, IPerson } from './iperson';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
   personListChange = new Subject<IPerson[]>();
   personList: IPerson[] = [];
  constructor() { }

  addPerson(person: IPerson) {
    this.personList.push(person);
    // Notifie that the list has been changed to inform changes. Otherwise. you wouldn't get updates.
    this.personListChange.next(this.personList);
  }

  removePerson(person: IPerson) {
    this.personList = this.personList.filter(dude => {
      return dude !== person;
    });
    this.personListChange.next(this.personList);
  }
}
