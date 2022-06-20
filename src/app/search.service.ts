import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private http:HttpClient) { }

  public searchByLocation(location:string){
    
    return this.http.get("http://localhost:8080/movie/users/location/"+location);
  
  }
  public searchByTheatrename(theatrename:string){
    return this.http.get("http://localhost:8080/movie/users/theatrename/"+theatrename);
  }
  public searchByMoviename(moviename:string){
    return this.http.get("http://localhost:8080/movie/users/moviename/"+moviename);
  }
}
