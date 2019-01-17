import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let header = new HttpHeaders();
    header = header.append("Authorization",'Basic '+btoa(`${username}:${password}`))
    return this.http.get<any>('/api/Userlogin', {headers: header})
      .pipe(map(user => {
        if (user) {
          user.authdata = btoa(`${username}:${password}`);
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  getRole(){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // const currentUser = localStorage.getItem('currentUser');
    if(currentUser)
    {return currentUser.role }
  }

  getUserNumber(){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
      return currentUser.userId
    }

  }
}
