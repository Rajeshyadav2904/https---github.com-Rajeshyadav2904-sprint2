import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { BookTicket } from '../BookTicket';
import { ShowInformation } from '../ShowInformation';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
book:BookTicket=new BookTicket();
msg:any;



  constructor(private service:BookingService) { }

  ngOnInit(): void {
  }
  public doBooking(){
    let res= this.service.Book(this.book);
    res.subscribe((date)=>this.msg=date);
  }

}
