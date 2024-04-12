import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // TODO: Fake data
}
