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
  enableAdd: Boolean = true;
  showUserForm: boolean = !true;

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
          },
          isActive: true,
          registered: new Date('10/01/2018 09:34:00'),
          hide: true
        },
        {
          firstName: 'Devon',
          lastName: 'Anderson',
          age: 41,
          address: {
            street: '111 South St',
            city: 'Atlanta',
            state: 'Georgia'
          },
          isActive: false,
          registered: new Date('10/04/2016 12:19:00'),
          hide: true
        },
        {
          firstName: 'Courtney',
          lastName: 'Palette',
          age: 32,
          address: {
            street: '111 North St',
            city: 'Commerce',
            state: 'Georgia'
          },
          isActive: true,
          registered: new Date('12/24/2015 03:44:00'),
          hide: true
        }
      ];

      this.loaded = true;

  }

  addUser(user: User) {
    this.users.push(user);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

}
