import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginUpPage } from './login-up';
import { EventsPage } from '../events/events';

@NgModule({
  declarations: [
    LoginUpPage,
    EventsPage
  ],
  imports: [
    IonicPageModule.forChild(LoginUpPage),
  ],
})
export class LoginUpPageModule {}
