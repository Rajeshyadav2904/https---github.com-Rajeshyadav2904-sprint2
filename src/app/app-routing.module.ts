import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { HomeComponent } from './home/home.component';

import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { SearchComponent } from './search/search.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

const routes: Routes = [
 {path:"",redirectTo:"home", pathMatch:"full"},
 {path:'home', component:HomeComponent},
  {path:'registration-user', component:RegistrationUserComponent},
  {path:'booking', component:BookingComponent},
  {path:'view-ticket', component:ViewTicketComponent},
  {path:'cancel-ticket', component:CancelTicketComponent},
  {path:'search', component:SearchComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
