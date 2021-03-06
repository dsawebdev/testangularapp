import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [`./user.component.scss`]
 
})

export class UserComponent implements OnInit {
  
  //Properties
  user: User;

  //Methods
  constructor() {
    
  }

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '111 East St',
        city: 'Athens',
        state: 'Georgia'
      }
    }
  }
}



 
