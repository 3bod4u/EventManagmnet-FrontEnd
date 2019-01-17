import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commentss} from '../_model/comment.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient){
  }

  getComments(id : number) : Observable<Commentss[]>{
    return this.http.get<Commentss[]>(`/api/comment/${id}`);
  }

  addComment(a,userid : number , eventid : number) : Observable<any>{
    return this.http.post<any>(`/api/comment/${userid}/${eventid}`,JSON.stringify(a),API_ARGS)
  }

  upadteComment(a,id: number): Observable<any>{
    return this.http.put<any>(`/api/comment/${id}`,JSON.stringify(a),API_ARGS);
  }

  deleteComment(id:number): Observable<any>{
    return this.http.delete<any>(`/api/comment/${id}`);
  }


}
