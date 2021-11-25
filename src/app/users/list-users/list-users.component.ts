import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.ListUsers().subscribe(data => {
      this.listUsers = data;
    })

  }

}
