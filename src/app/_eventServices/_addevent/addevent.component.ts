import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../_service/event.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  myReactiveForm : FormGroup;
  currentUser1 : any;
  id : number ;


  constructor(private formBuilder : FormBuilder, private eventService : EventService)
  {
    this.currentUser1 = JSON.parse(localStorage.getItem('currentUser'));
    this.id = this.currentUser1.userId;


  }

  ngOnInit() {
    this.myReactiveForm = this.formBuilder.group({

      title:``,
      description:``,
      seats:``,
      city:``,
      date:``
    });
  }

  addEvent(){
    this.eventService.addEvent(this.myReactiveForm.value,this.id).subscribe();
    alert('Event Added !');
  }

}
