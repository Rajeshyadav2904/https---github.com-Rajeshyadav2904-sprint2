import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationUserService } from '../registration-user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent implements OnInit {
  public registerForm!: FormGroup

  constructor(private service:RegistrationUserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group(
      {
        username:['', Validators.required],
        password:['',Validators.required],
        email:['', Validators.required],
        mobilenumber:['',Validators.required],
        role:['',Validators.required]
      }
    )
  }
  user: Users= new Users();
  message:any;

  public registerNow(){
   let res= this.service.doResgistration(this.user);
    res.subscribe((data)=>this.message=data);

  }

}









// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RegistrationUserService } from '../registration-user.service';
// import { Users } from '../Users';

// @Component({
//   selector: 'app-registration-user',
//   templateUrl: './registration-user.component.html',
//   styleUrls: ['./registration-user.component.css'],
// })
// export class RegistrationUserComponent implements OnInit {

//   public registerForm!: FormGroup;

//   constructor(
//     private service: RegistrationUserService,
//     private formBuilder: FormBuilder,
//   ) {}

//   ngOnInit(): void {
//     this.registerForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       email: ['', Validators.required],
//       mobilenumber: ['', Validators.required],
//       role: ['', Validators.required],
//     });
//   }
//   register(){ }
//   user: Users = new Users();
//   message: any;

//   public registerNow() {
//     let res = this.service.doResgistration(this.user);
//     res.subscribe((data) => (this.message = data));
//   }
// }
