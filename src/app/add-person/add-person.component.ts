import { Component, OnInit } from '@angular/core';
import {PersonService} from '../Person/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  public personData;
  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  onClick(): void {
    // this.personService.persons.emit(this.personData);
    this.personService.persons.next(this.personData);
    this.personData = '';
  }
}
