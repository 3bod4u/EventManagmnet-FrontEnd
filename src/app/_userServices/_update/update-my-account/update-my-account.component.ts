import { Component, OnInit } from '@angular/core';
import {User} from '../../../_model/uesr.model';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../_service/user.service';
import {AuthenticationService} from '../../../_login/authentication.service';

@Component({
  selector: 'app-update-my-account',
  templateUrl: './update-my-account.component.html',
  styleUrls: ['./update-my-account.component.css']
})
export class UpdateMyAccountComponent implements OnInit {

  id : number;
  user : User;
  private sub: Subscription;
  myReactiveForm: FormGroup;
  myReactiveForm2: FormGroup;


  constructor(private auth : AuthenticationService,private formBuilder : FormBuilder ,private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.id = this.auth.getUserNumber();


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
