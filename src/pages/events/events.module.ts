import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import { ListEventsPage } from '../list-events/list-events';

import { LoginUpPage } from '../login-up/login-up';


@NgModule({
  declarations: [
    EventsPage,
    ListEventsPage,
    LoginUpPage
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
  ],
})
export class EventsPageModule {}
