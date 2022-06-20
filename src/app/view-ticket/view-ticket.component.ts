import { Component, OnInit } from '@angular/core';
import { ViewTicketService } from '../view-ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
datail:any;
bookingid!:number;
msg!:any;
  constructor(private service:ViewTicketService) { }

  ngOnInit(): void {
  }
  public viewTicketById(){
    console.log("statre");
    this.service.viewTicket(this.bookingid).subscribe((data)=>this.datail=data);
    console.log(this.datail);
  }
  public cancel(bookingid:number){
    this.service.cancelTicket(this.bookingid).subscribe((data)=>this.msg=data);

    
  }

}
