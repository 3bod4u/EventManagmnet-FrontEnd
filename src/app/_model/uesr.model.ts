import {Role} from './role.model';

export class User{
  constructor(public id:number,
  public firstname: string,
  public lastname: string,
  public email: string,
  public phone: string,
 public  password: string,
 public  role: Role){
}

}
