import { Component, OnInit } from '@angular/core';
import { PersonService } from '../Person/person.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
 personList = [];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.persons.subscribe(data => {
      this.personList.push(data);
    });
  }

}
