import { Injectable } from '@angular/core';
import { User } from '../Model/User';

interface UserType {
  name: string;
  sex: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserInfo {
  users: UserType[] = [
    new User('charles', 'male', 28),
    new User('May', 'male', 28),
    new User('Pofu', 'male', 28),
  ];

  getUser() {
    return this.users;
  }

  createUser({ name, sex, age }: UserType) {
    const newUser = new User(name, sex, age);

    this.users.push(newUser);
  }

  removeUser(userName: string) {
    this.users = this.users.filter(({ name }) => name !== userName);

    console.log('users ininer', this.users);
  }
}
