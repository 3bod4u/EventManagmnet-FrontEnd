import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_service/user.service';
import {User} from '../../_model/uesr.model';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css']
})
export class GetbyidComponent implements OnInit {
  id : number;
  user : User;
  private sub: Subscription;
  myReactiveForm: FormGroup;
  myReactiveForm2: FormGroup;

  constructor(private formBuilder : FormBuilder ,private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.userService.getUser(this.id).subscribe(
      userData => {
        this.user = userData;
        this.myReactiveForm.patchValue(this.user as any)
      },
    )

    this.myReactiveForm2 = this.formBuilder.group({
      usertype: ``
    });


    this.myReactiveForm = this.formBuilder.group({
      userid:``,
      firstname: ``,
      lastname : ``,
      email: ``,
      phone: ``,
      password: ``,
      role: this.myReactiveForm2

    });

  }

  update() {
    this.userService.updateUser(this.myReactiveForm,this.id).subscribe();
    alert('thank you for _update ');
  }


}
