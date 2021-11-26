import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId : any;
  constructor(private activatedRoute: ActivatedRoute , private userService:UserService , private _snackBar: MatSnackBar ,private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data => {
      this.userId = data.get('id');
     });
     if (this.userId){
        this.userService.deleteUder(this.userId).subscribe(data => {this._snackBar.open('user deleted uccessfully');
      this.router.navigate(['list'])},
        err=>{this._snackBar.open('Unable to delete a user')});
     }
  }

}
