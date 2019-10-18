import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    new User('Emiliano', 'Castillo', 'emiliano@castillo.com', 'jus de pomme', ['Football Américain', 'Jujitsu'])
  ];
  useSubject = new Subject<User[]>();

  emitUser() {
    this.useSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }
}
