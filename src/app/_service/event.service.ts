import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Events} from '../_model/event.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient){
  }

  getEvents() : Observable<Events[]>{
    return this.http.get<Events[]>(`/api/event`);
  }

  addEvent(a,id :any) : Observable<Events>{
    return this.http.post<Events>(`/api/event/${id}`,JSON.stringify(a),API_ARGS);
  }

  getEvent(id : number) : Observable<Events>{
    return this.http.get<Events>(`/api/event/${id}`);
  }

  updateEvent(a,id : number) : Observable<Events>{
    return this.http.put<Events>(`/api/event/${id}`,JSON.stringify(a),API_ARGS);
  }

  availableEvent() : Observable<Events[]>{
    return this.http.get<Events[]>('/api/event/findAvailable');
  }

  UnavailableEvent() : Observable<Events[]>{
    return this.http.get<Events[]>('/api/event/findUnavailable');
  }

  myEvent(id : number) : Observable<Events[]>{
    return this.http.get<Events[]>(`/api/event/findMyEvent/${id}`);
  }

  approveEvent(id : number) : Observable<Events>{
    return this.http.put<Events>(`/api/event/approve/${id}`,API_ARGS);
  }

  disapproveEvent(id : number) : Observable<Events>{
    return this.http.put<Events>(`/api/event/disapprove/${id}`,API_ARGS);
  }

  getByCity(city: string) : Observable<Events[]>{
    return this.http.get<Events[]>(`/api/event/findbycity/${city}`);
  }

  getByDate(date: Date) : Observable<Events[]>{
    return this.http.get<Events[]>(`/api/event/findbydate/${date}`);
  }

  getByCityAndDate(city : string ,date: Date) : Observable<Event[]>{
    return this.http.get<Event[]>(`/api/event/findboth/${city}/${date}`);
  }

  deleteEvent(id : number) : Observable<Event>{
    return this.http.delete<Event>(`/api/event/${id}`);
  }

}
