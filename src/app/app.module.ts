import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from './_service/user.service';
import { RegisterComponent } from './_userServices/_register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FindallusersComponent } from './_userServices/_findAll/findallusers.component';
import { GetbyidComponent } from './_userServices/_update/getbyid.component';
import { DeleteUserComponent } from './_userServices/_delete/delete-user.component';
import { LoginComponent } from './_login/login.component';
import {TicketService} from './_service/ticket.service';
import {EventService} from './_service/event.service';
import {CommentService} from './_service/comment.service';
import { AddeventComponent } from './_eventServices/_addevent/addevent.component';
import { GetalleventsComponent } from './_eventServices/_getallevents/getallevents.component';
import { UpdateEventComponent } from './_eventServices/_updateEvent/update-event.component';
import { FindAvailableComponent } from './_eventServices/_findAvailable/find-available.component';
import { GetUserTicketComponent } from './_TicketServices/get-user-ticket/get-user-ticket.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BasicAuthInterceptor} from './_login/basic-auth.interceptor';
import {ErrorInterceptor} from './_login/error.interceptor';
import { CommentComponent } from './_eventServices/comment/comment.component';
import { UpdateMyAccountComponent } from './_userServices/_update/update-my-account/update-my-account.component';
import { MyEventComponent } from './_eventServices/my-event/my-event.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FindallusersComponent,
    GetbyidComponent,
    DeleteUserComponent,
    LoginComponent,
    AddeventComponent,
    GetalleventsComponent,
    UpdateEventComponent,
    FindAvailableComponent,
    GetUserTicketComponent,
    NavBarComponent,
    CommentComponent,
    UpdateMyAccountComponent,
    MyEventComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TicketService,
    EventService,
    CommentService,
    {provide : HTTP_INTERCEPTORS , useClass: BasicAuthInterceptor , multi: true},

    {provide : HTTP_INTERCEPTORS , useClass: ErrorInterceptor , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
