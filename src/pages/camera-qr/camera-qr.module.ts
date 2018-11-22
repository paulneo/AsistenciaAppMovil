import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraQrPage } from './camera-qr';


@NgModule({
  declarations: [
    CameraQrPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraQrPage),
  ],
})
export class CameraQrPageModule {}
