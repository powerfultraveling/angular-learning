import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfo } from '../../../Service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  constructor(private userInfo: UserInfo) {}

  users = this.userInfo.getUser();

  removeUser(name: string) {
    this.userInfo.removeUser(name);

    this.users = this.userInfo.getUser();
  }
}
