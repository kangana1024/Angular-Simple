import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html'
})
export class PersonsInputComponent implements OnInit {

  enteredPersonName = '';

  constructor(private personService: PersonService) { }

  ngOnInit(): void { }

  onCreatePersion(): boolean {
    // this.personCreate.emit(this.enteredPersonName);
    // this.enteredPersonName = '';
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
    return false;
  }
}
