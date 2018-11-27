import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import { ListEventsPage } from '../list-events/list-events';
import { LoginPage } from '../login/login';


@NgModule({
  declarations: [
    EventsPage,
    ListEventsPage,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
  ],
})
export class EventsPageModule {}
