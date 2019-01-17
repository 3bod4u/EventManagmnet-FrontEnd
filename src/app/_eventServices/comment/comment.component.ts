import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../../_service/comment.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Commentss} from '../../_model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment$ : Commentss[];
  ReactiveForm : FormGroup;
  currentUser1 : any;
  id : number ;
  idd : number ;
  private sub: Subscription;

  constructor(private route : ActivatedRoute ,private formBuilder:FormBuilder,private commentServices : CommentService) {
    this.currentUser1 = JSON.parse(localStorage.getItem('currentUser'));
    this.idd = this.currentUser1.userId;

  }

  ngOnInit() {

    this.sub = this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    console.log(this.idd);
    console.log(this.id);
    console.log("------------------------------------------");
    this.ReactiveForm = this.formBuilder.group({
      comment:``
    })

    this.findAllComments()
  }

  findAllComments(){
    this.commentServices.getComments(this.id).subscribe(eventData => {
        this.comment$ = eventData;
      },
      err => console.log(err),
      () => console.log('Getting comment complete...'));
  }
  addComment(){
    this.commentServices.addComment(this.ReactiveForm.value ,this.idd,this.id).subscribe();
  }

}
