import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ShowInformation } from '../ShowInformation';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  details: any;
  location!: string;
  moviename!: string;
  theatrename!: string;
  constructor(private service: SearchService) {}

  ngOnInit(): void {}
  public searchBLocation() {
    this.service
      .searchByLocation(this.location)
      .subscribe((data) => (this.details = data));

    console.log(this.details);
  }
  public searchBMoviename() {
    this.service
      .searchByMoviename(this.moviename)
      .subscribe((data) => (this.details = data));
  }
  public searchBTheartername() {
    this.service
      .searchByTheatrename(this.theatrename)
      .subscribe((data) => (this.details = data));
  }
}
