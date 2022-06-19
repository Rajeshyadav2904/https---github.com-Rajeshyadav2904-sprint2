import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationUserService {

  constructor( private http:HttpClient) { }

public doResgistration(user: Users):Observable<object>{
  return this.http.post("http://localhost:8080/movie/users",user,{responseType:'text'as 'json'});

}
  
}


