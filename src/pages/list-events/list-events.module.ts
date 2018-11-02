import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEventsPage } from './list-events';
import { CameraQrPage } from '../camera-qr/camera-qr';

@NgModule({
  declarations: [
    ListEventsPage,
    CameraQrPage,
  ],
  imports: [
    IonicPageModule.forChild(ListEventsPage),
  ],
})
export class ListEventsPageModule {}
