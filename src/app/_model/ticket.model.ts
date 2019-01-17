import {User} from './uesr.model';
import {Events} from './event.model';

export class Ticket{
  constructor(public ticketid: number ,
              public ticketPass: string,
              public title: string,
              public date: Date,
              public user: User,
              public event: Events
              ){}
}
