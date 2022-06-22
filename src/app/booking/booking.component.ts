import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { BookTicket } from '../BookTicket';
import { ShowInformation } from '../ShowInformation';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public bookingForm!: FormGroup
  constructor(private service:BookingService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm=this.formBuilder.group(
      {
        noofticketsbooked:['', Validators.required],
        userid:['',Validators.required],
        showid:['', Validators.required],
        
      }
    )
  }


  book:BookTicket=new BookTicket();
  msg:any;

  public doBooking(){
    let res= this.service.Book(this.book);
    res.subscribe((date)=>this.msg=date);
  }

}
