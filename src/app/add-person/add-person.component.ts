import { Component, OnInit } from '@angular/core';
import {PersonService} from '../Person/person.service';
import {Person, IPerson} from '../Person/iperson';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
 person: Person;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.person = {} as IPerson;
  }

  onClick(): void {
    // this.personService.persons.emit(this.personData);

    this.personService.persons.next(this.person);
    this.person = {} as IPerson;
  }
}
