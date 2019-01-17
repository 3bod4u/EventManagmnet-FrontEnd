import { Component, OnInit } from '@angular/core';
import {EventService} from '../../_service/event.service';
import {Events} from '../../_model/event.model';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-getallevents',
  templateUrl: './getallevents.component.html',
  styleUrls: ['./getallevents.component.css']
})
export class GetalleventsComponent implements OnInit {

  event$ : Events[];
  events$ : Events[];
  currentUser1 : any;
  id : number ;

  constructor(private formBuilder:FormBuilder, private eventServices:EventService) {

    this.currentUser1 = JSON.parse(localStorage.getItem('currentUser'));
    this.id = this.currentUser1.userId;

  }

  ngOnInit() {
    this.getEvents();
    this.getUnavailble();
  }

  getEvents(){
    this.eventServices.availableEvent().subscribe(eventData => {
      this.event$ = eventData;
      },
      err => console.log(err),
      () => console.log('Getting Event complete...'));
  }

  getUnavailble(){
    this.eventServices.UnavailableEvent().subscribe(eventData => {
        this.events$ = eventData;
      },
      err => console.log(err),
      () => console.log('Getting Event complete...'));
  }

  approveEvent(id : number){
    this.eventServices.approveEvent(id).subscribe();
    alert("Event approve ! ");
    window.location.reload();
  }

  desapproveEvent(id : number){
    this.eventServices.disapproveEvent(id).subscribe();
    alert("Event dispprove ! ");
    window.location.reload();
  }

  deleteEvent(id : number){
    this.eventServices.deleteEvent(id).subscribe();
    alert("Event Delted ! ");
    window.location.reload();
  }


}
