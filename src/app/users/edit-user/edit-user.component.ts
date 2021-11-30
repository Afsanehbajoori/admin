import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup , FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId : any;
  userDetail : any;
  editUserForm :FormGroup = new FormGroup({});
  dataLoadede:boolean = false
  constructor(private activatedRoute:ActivatedRoute , private userService:UserService , private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.dataLoadede= false;
    //get a data :
    this.activatedRoute.paramMap.subscribe(data => {this.userId = data.get('id') });

    if(this.userId !=='')
    {
      this.userService.viewUser(this.userId)
      .toPromise()
      .then(data => {
        this.userDetail = data;
        Object.assign(this.userDetail , data);
        console.log(this.userDetail);


      // buid a edit form :
    this.editUserForm=this.formBuilder.group({
      'username': new FormControl(this.userDetail.name),
      'email' : new FormControl(this.userDetail.email)

    })
    this.dataLoadede = true;
    })
    }

  }
  UpdateUser(){
    console.log(this.editUserForm.value);
    this.userService.updateUser(this.userId , this.editUserForm.value);

  }

}
