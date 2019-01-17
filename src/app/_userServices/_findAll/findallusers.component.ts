import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_service/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../_model/uesr.model';


@Component({
  selector: 'app-findallusers',
  templateUrl: './findallusers.component.html',
  styleUrls: ['./findallusers.component.css']
})
export class FindallusersComponent implements OnInit {
  users$: User[];
  id: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.getUsers();

  }

  getUsers() {
    this.userService.getUsers().subscribe(
      userData => {
        this.users$ = userData;
      },
      err => console.log(err),
      () => console.log('Getting users complete...')
    );

  }

}
