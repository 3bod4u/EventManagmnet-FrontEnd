import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './_userServices/_register/register.component';
import {FindallusersComponent} from './_userServices/_findAll/findallusers.component';
import {GetbyidComponent} from './_userServices/_update/getbyid.component';
import {DeleteUserComponent} from './_userServices/_delete/delete-user.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './_login/login.component';
import {AuthGuard} from './_login/auth.guard';
import {AddeventComponent} from './_eventServices/_addevent/addevent.component';
import {GetalleventsComponent} from './_eventServices/_getallevents/getallevents.component';
import {UpdateEventComponent} from './_eventServices/_updateEvent/update-event.component';
import {FindAvailableComponent} from './_eventServices/_findAvailable/find-available.component';
import {GetUserTicketComponent} from './_TicketServices/get-user-ticket/get-user-ticket.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CommentComponent} from './_eventServices/comment/comment.component';
import {UpdateMyAccountComponent} from './_userServices/_update/update-my-account/update-my-account.component';
import {MyEventComponent} from './_eventServices/my-event/my-event.component';
import {HelloComponent} from './hello/hello.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HelloComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'findall', component: FindallusersComponent, canActivate: [AuthGuard], data: {userRole: 'ROLE_ADMIN'}},
  {path: '_update/:id', component: GetbyidComponent},
  {path: 'delete/:id', component: DeleteUserComponent},
  {path: 'addEvent', component: AddeventComponent},
  {path: 'getAllEvents', component: GetalleventsComponent},
  {path: 'updateEvent/:id', component: UpdateEventComponent},
  {path: 'availableEvent', component: FindAvailableComponent},
  {path: 'userTicket', component: GetUserTicketComponent},
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'myEvent', component: MyEventComponent},
  {path: 'Comment/:id', component: CommentComponent},
  {path: 'update', component: UpdateMyAccountComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
