import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http:HttpClient) {}

    ListUsers(){
      return this.http.get(this.baseUrl + 'users')
    }

    viewUser(id:string){
      return this.http.get(this.baseUrl + 'users/'+ id  )
      //return this.http.get(`${this.baseUrl}/ users/ ${id} ` )
    }


}
