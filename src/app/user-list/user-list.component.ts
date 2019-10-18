import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../models/User.model';
import {Subscription} from 'rxjs';
import {UserService} from '../services/User.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.useSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUser();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
