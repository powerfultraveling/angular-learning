import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInfo } from '../../Service/user.service';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, UserListComponent, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  constructor(private userInfo: UserInfo) {}

  users = this.userInfo.getUser();

  name: string = '';
  sex: string = '';
  age: number = 0;

  addUser() {
    this.userInfo.createUser({
      name: this.name,
      sex: this.sex,
      age: this.age,
    });

    console.log('user', this.users);
  }
}
