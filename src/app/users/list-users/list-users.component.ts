import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { UserService } from './../../services/user.service';

export interface User {

  id: number;
  name: string;
  username: string;
  email: string;
}

//const ELEMENT_DATA: User[] = [];


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email' , 'actions'];
  //dataSource = ELEMENT_DATA;

  listUsers: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.ListUsers().subscribe(data => {
      this.listUsers = data;
    })

  }

}
