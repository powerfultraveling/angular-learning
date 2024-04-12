import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OnSubscribe {
  onSubscribeClicked() {
    alert('Subscribe');
  }
}
