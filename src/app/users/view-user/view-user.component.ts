import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { observable } from 'rxjs';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  listView : any;
  userId : any ;
  constructor(private userService:UserService , private activatedRoute : ActivatedRoute ) {}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data => {this.userId = data.get('id');
   console.log(this.userId);})
    this.userService.viewUser(this.userId).subscribe(data => {console.log(data);
    this.listView=data;})

  }

}
