import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../_service/event.service';
import {Subscription} from 'rxjs';
import {Events} from '../../_model/event.model';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  id : number;
  event: Events;
  private sub: Subscription;
  myReactiveForm : FormGroup;

  constructor(private formBuilder : FormBuilder ,private route: ActivatedRoute, private eventService : EventService){

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    console.log(this.id);

    this.eventService.getEvent(this.id).subscribe(
      userData => {
        this.event = userData;
        this.myReactiveForm.patchValue(this.event as any)
      },
    )

    this.myReactiveForm = this.formBuilder.group({
      eventid:``,
      title:``,
      description:``,
      seats:``,
      city:``,
      date:``
    });
  }

  updateEvent(){
    this.eventService.updateEvent(this.myReactiveForm.value,this.id).subscribe();
  }

}
