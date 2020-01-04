import { Component, OnInit } from '@angular/core';
import { PersonService } from '../Person/person.service';
import { IPerson } from '../Person/iperson';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
 personList: IPerson[];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personList = this.personService.personList;
    }
  }
