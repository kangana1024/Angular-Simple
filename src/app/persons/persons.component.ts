import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PersonService } from './person.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit, OnDestroy {
  private personListSubs: Subscription;
  personLists: string[];
  isFetching = false;
  constructor(private personsService: PersonService) { }

  ngOnInit() {
    this.personListSubs = this.personsService.personChanged.subscribe(person => {
      this.personLists = person;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.personsService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    this.personsService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
