import {User} from './uesr.model';

export class Events{

  constructor(public eventid: number,
              public title: string,
              public description: string,
              public seats: number,
              public city: string,
              public date: Date,
              public approved: boolean,
              public counter: number,
              public user1: User,
              public comment:Comment[]
              ){}


}
