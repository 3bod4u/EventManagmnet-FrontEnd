import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_model/uesr.model';


const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn:'root'
})
export class UserService {

  constructor(private http: HttpClient){
  }

  addUser(a): Observable<User> {
    return this.http.post<User>('/api/user', JSON.stringify(a.value), API_ARGS);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/user');
  }
  getUsersAvailable(): Observable<User[]> {
    return this.http.get<User[]>('/api/user/findallavailable');
  }

  getUser(id : number) : Observable<User>{
    return this.http.get<User>(`/api/user/${id}`);
  }

  updateUser(a, id :number) : Observable<User>{
    return this.http.put<User>(`/api/user/${id}`, JSON.stringify(a.value),API_ARGS);
  }

  Delete(id : number) : Observable<User>{
    return this.http.delete<User>(`/api/user/${id}`);
  }




}
