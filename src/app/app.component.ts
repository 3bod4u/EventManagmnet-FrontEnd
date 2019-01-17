import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './_login/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Evenet-project';
  Hi : boolean = true;

  constructor(private auth: AuthenticationService,
              private router: Router) {}

  ngOnInit(){
    console.log(this.router);
  }
}
