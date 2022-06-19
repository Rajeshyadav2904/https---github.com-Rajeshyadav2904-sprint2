import { Component, OnInit } from '@angular/core';
import { RegistrationUserService } from '../registration-user.service';
import { Users } from '../Users';



@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent implements OnInit {
  

user: Users= new Users();
message:any;
  constructor(private service:RegistrationUserService) { }

  ngOnInit(): void {
  }
  public registerNow(){
   let res= this.service.doResgistration(this.user);
    res.subscribe((data)=>this.message=data);

  }

}
