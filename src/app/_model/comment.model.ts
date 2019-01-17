import {User} from './uesr.model';
import {Events} from './event.model';

export class Commentss{
  constructor(public commentid: number,
              public comment: string,
              public date: Date,
              public event: Events,
              public user: User)
  {

  }

}
