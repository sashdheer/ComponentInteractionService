import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { IPerson } from './iperson';
import {HttpClient} from '@angular/common/http';
import {map, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
   personListChange = new Subject<IPerson[]>();
   personList: IPerson[] = [];
  constructor(private http: HttpClient) { }

  addPerson(person: IPerson) {
    this.personList.push(person);
    // Notify that the list has been changed to inform changes. Otherwise. you wouldn't get updates.
    this.personListChange.next(this.personList);
  }

  removePerson(person: IPerson) {
    this.personList = this.personList.filter(dude => {
      return dude !== person;
    });
    this.personListChange.next(this.personList);
  }

  fetchPersons() {
    this.http
    .get<any>('https://swapi.co/api/people')
    .pipe(map(data => {
      return data.results;
    }))
    .subscribe(filteredData => {
     // return filteredData;
     return this.personListChange.next(filteredData);
    });
  }
}
