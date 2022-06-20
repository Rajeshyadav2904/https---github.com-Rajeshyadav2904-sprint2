import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancelTicketService {

  constructor(private http:HttpClient) { }
  
  public cancelTicket(bookingid:number){
    return this.http.delete("http://localhost:8080/movie/users/delete/"+bookingid);
  }
}
