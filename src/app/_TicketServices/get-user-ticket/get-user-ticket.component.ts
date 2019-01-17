import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../_service/ticket.service';
import {Ticket} from '../../_model/ticket.model';

@Component({
  selector: 'app-get-user-ticket',
  templateUrl: './get-user-ticket.component.html',
  styleUrls: ['./get-user-ticket.component.css']
})
export class GetUserTicketComponent implements OnInit {

  id : number
  userCurrent : any
  ticket$: Ticket[];
  constructor(private ticketService : TicketService)
  {
    this.userCurrent = JSON.parse(localStorage.getItem('currentUser'));
    this.id = this.userCurrent.userId;
  }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(){
    this.ticketService.getUserTicket(this.id).subscribe(ticketData => {
        this.ticket$ = ticketData;
      },
      err => console.log(err),
      () => console.log('Getting Event complete...'));
  }

  Delete(id : number){
    this.ticketService.deleteTicket(id).subscribe();
    alert("Ticket Deleted ! ");
    window.location.reload();
  }

}
