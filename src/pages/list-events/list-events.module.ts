import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEventsPage } from './list-events';
import { CameraQrPage } from '../camera-qr/camera-qr';
import { RegisterAssistancePage } from '../register-assistance/register-assistance';


@NgModule({
  declarations: [
    ListEventsPage,
    CameraQrPage,
    RegisterAssistancePage,
  ],
  imports: [
    IonicPageModule.forChild(ListEventsPage),
  ],
})
export class ListEventsPageModule {}
