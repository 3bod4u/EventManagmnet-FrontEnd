import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../../_model/role.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myReactiveForm: FormGroup;
  myReactiveForm2: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
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
      role:this.myReactiveForm2
    });
  }

  onSubmit() {
    this.userService.addUser(this.myReactiveForm).subscribe();
    alert('thank you for regesting ');
  }

}
