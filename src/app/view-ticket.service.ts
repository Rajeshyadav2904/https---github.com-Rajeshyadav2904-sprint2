import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewTicketService {

  constructor(private http:HttpClient) { }

  public viewTicket(bookingid:number){
   return  this.http.get("http://localhost:8080/movie/users/viewticket/"+bookingid);
  }
  public cancelTicket(bookingid:number){
    return this.http.delete("http://localhost:8080/movie/users/delete/"+bookingid);
  }
}
