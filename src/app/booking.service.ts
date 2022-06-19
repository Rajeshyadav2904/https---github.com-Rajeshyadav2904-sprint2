import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookTicket } from './BookTicket';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  public Book(book:BookTicket):Observable<object>{
    return this.http.post("http://localhost:8080/movie/users/booking",book,{responseType:'text'as 'json'});

  }
}
