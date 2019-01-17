import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../_service/event.service';
import {Events} from '../../_model/event.model';
import {TicketService} from '../../_service/ticket.service';

@Component({
  selector: 'app-find-available',
  templateUrl: './find-available.component.html',
  styleUrls: ['./find-available.component.css']
})
export class FindAvailableComponent implements OnInit {

  event$ : Events[];
  currentUser1 : any;
  id1 : number ;

  constructor(private rout : ActivatedRoute,private eventServices : EventService, private ticketServices : TicketService) {
    this.currentUser1 = JSON.parse(localStorage.getItem('currentUser'));
    this.id1 = this.currentUser1.userId;
  }

  ngOnInit() {
    this.getAvailbleEvent();
  }

  getAvailbleEvent(){
    this.eventServices.availableEvent().subscribe(eventData => {
        this.event$ = eventData;
      },
      err => console.log(err),
      () => console.log('Getting Event complete...'));
  }

  bookTicket(id : number){
    this.ticketServices.addTicket(id , this.id1).subscribe();
    window.location.reload();
  }

}
