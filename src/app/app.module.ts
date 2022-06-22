import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { SearchComponent } from './search/search.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { BookingComponent } from './booking/booking.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from './booking.service';
import { LoginService } from './login.service';
import { RegistrationUserService } from './registration-user.service';
import { SearchService } from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationUserComponent,
  
    SearchComponent,
    CancelTicketComponent,
    BookingComponent,
    ViewTicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  providers: [BookingService,CancelTicketComponent,LoginService,RegistrationUserService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
