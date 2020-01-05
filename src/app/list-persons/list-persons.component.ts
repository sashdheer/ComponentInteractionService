import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonService } from '../Person/person.service';
import { IPerson } from '../Person/iperson';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit, OnDestroy {
 personList: IPerson[];
 private personListSubscription: Subscription;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personList = this.personService.personList;
    // Listen for changes.
    this.personListSubscription = this.personService.personListChange.subscribe(persons => {
      this.personList = persons;
    });
    }

    ngOnDestroy() {
      // clear the subscription
    this.personListSubscription.unsubscribe();
    }

  onRemove(person: IPerson) {
      this.personService.removePerson(person);
    }
  }
