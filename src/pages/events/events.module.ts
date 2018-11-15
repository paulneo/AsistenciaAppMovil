import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import { ListEventsPage } from '../list-events/list-events';


@NgModule({
  declarations: [
    EventsPage,
    ListEventsPage
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
  ],
})
export class EventsPageModule {}
