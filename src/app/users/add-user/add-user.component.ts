import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm : FormGroup = new FormGroup({});

  constructor(private formBuider : FormBuilder , private userservice: UserService , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuider.group({
      'username': new FormControl(''),
      'email' : new FormControl(''),
      'phone' : new FormControl('')
    })
  }

  createUser(){
    this.userservice.addUser(this.addUserForm.value).subscribe(data => {this._snackBar.open('user created successfully')},
    err=>{this._snackBar.open('Unable to create a user')});
    console.log(this.addUserForm.value);
  }

}
