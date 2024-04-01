//EXPLAIN: TAngular can be ran at several platform. Now we are trying to run it on browser
//so we import this module.
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//EXPLAIN: bootstrap the component to the app.
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
