import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../_model/ticket.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient){
  }

  getTickets() : Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`/api/ticket`);
  }

  getTicketsAvailable() : Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`/api/ticket/findAllAvailable`);
  }

  getTicket(id : number) : Observable<Ticket>{
    return this.http.get<Ticket>(`/api/ticket/${id}`);
  }

  getUserTicket(id : number) : Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`/api/ticket/user/${id}`);
  }

  addTicket(eventid : number, userid : number) : Observable<Ticket>{
    return this.http.post<Ticket>(`/api/ticket/${eventid}/${userid}`,API_ARGS);
  }

  deleteTicket(id : number) : Observable<Ticket>{
    return this.http.delete<Ticket>(`/api/ticket/${id}`);
  }






}
