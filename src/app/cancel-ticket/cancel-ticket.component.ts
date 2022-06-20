import { Component, OnInit } from '@angular/core';
import { CancelTicketService } from '../cancel-ticket.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {

  constructor(private service:CancelTicketService) { }
bookingid:any;
msg:any;
  ngOnInit(): void {
  }
  public cancel(){
    this.service.cancelTicket(this.bookingid).subscribe((data)=>this.msg=data);

    
  }
}
