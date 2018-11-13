import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListEventsPage } from '../pages/list-events/list-events';
import { RegisterAssistancePage } from '../pages/register-assistance/register-assistance';
import { CameraQrPage } from '../pages/camera-qr/camera-qr';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { EventServiceProvider } from '../providers/event-service/event-service';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListEventsPage,
    RegisterAssistancePage,
    CameraQrPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListEventsPage,
    RegisterAssistancePage,
    CameraQrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventServiceProvider,
  

  ]
})
export class AppModule {}
