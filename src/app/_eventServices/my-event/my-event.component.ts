import { Component, OnInit } from '@angular/core';
import {Events} from '../../_model/event.model';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../_service/event.service';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {

  event$ : Events[];
  currentUser1 : any;
  id1 : number ;

  constructor(private rout : ActivatedRoute,private eventServices : EventService) {
    this.currentUser1 = JSON.parse(localStorage.getItem('currentUser'));
    this.id1 = this.currentUser1.userId;
  }

  ngOnInit() {
    this.getMyEvent();
  }

  getMyEvent(){
    this.eventServices.myEvent(this.id1).subscribe(eventData => {
        this.event$ = eventData;
      },
      err => console.log(err),
      () => console.log('Getting Event complete...'));
  }


}
