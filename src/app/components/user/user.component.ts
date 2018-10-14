import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [`./user.component.scss`]
 
})

export class UserComponent {
  //Properties
  firstName: String;
  lastName: String;
  age: Number;
  address;

  //Methods
  constructor() {
    this.firstName = 'Devon';
    this.lastName = 'Anderson';
    this.age = 41;
    this.address = {
      street: '410 Marie Ct',
      city: 'Athens',
      state: 'Georgia'

    }
  }

  showAge() {
    return this.age;
  }
}