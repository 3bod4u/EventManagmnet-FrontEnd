import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_login/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  admin : boolean;
  attender : boolean;
  orgnizer : boolean;
  navbar : boolean;

  constructor( private auth : AuthenticationService) { }

  ngOnInit() {
    this.getRole();

  }

  getRole(){
    let admin = false;
    let attender = false;
    let orgnizer = false;
    let navbar = true;
    if(this.auth.getRole().includes('ROLE_ADMIN')){
      admin = true;
      navbar = false;

    }else{
      if(this.auth.getRole().includes('ROLE_ATTENDER')){
        attender = true;
        navbar = false;
      }else{
        if(this.auth.getRole().includes('ROLE_ORGNIZER')){
          orgnizer = true;
          navbar = false;
        }
      }
    }
    this.admin = admin;
    this.attender = attender;
    this.orgnizer = orgnizer;
    this.navbar = navbar;
  }
}
