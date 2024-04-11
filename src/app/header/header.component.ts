import { Component } from '@angular/core';
import { OnSubscribe } from '../Service/subscribe.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [OnSubscribe],
})
export class HeaderComponent {
  constructor(private onSubscribe: OnSubscribe) {}

  onClick() {
    this.onSubscribe.onSubscribeClicked();
  }
}
