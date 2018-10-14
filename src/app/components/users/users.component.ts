import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;

  constructor() { }

  ngOnInit() {
    
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '111 East St',
            city: 'Athens',
            state: 'Georgia'
          }
        },
        {
          firstName: 'Devon',
          lastName: 'Anderson',
          age: 41,
          address: {
            street: '111 South St',
            city: 'Atlanta',
            state: 'Georgia'
          }
        }, 
        {
          firstName: 'Courtney',
          lastName: 'Palette',
          age: 32,
          address: {
            street: '111 North St',
            city: 'Commerce',
            state: 'Georgia'
          }
        }
      ];

    this.addUser({
      firstName: 'Adgell',
      lastName: 'Palette'
    });

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
