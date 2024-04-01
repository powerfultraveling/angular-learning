import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [AppComponent, TestComponentComponent],
  imports: [AppComponent, BrowserModule, FormsModule, TestComponentComponent],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
