import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListEventsPage } from '../pages/list-events/list-events';
import { RegisterAssistancePage } from '../pages/register-assistance/register-assistance';
import { CameraQrPage } from '../pages/camera-qr/camera-qr';
import { EventsPage } from '../pages/events/events';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { PersonServiceProvider } from '../providers/person-service/person-service';
import { AssistanceProvider } from '../providers/assistance/assistance';
import { ScheduledEventsProvider } from '../providers/scheduled_events-service/scheduled_events-service';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListEventsPage,
    RegisterAssistancePage,
    CameraQrPage,
    EventsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListEventsPage,
    RegisterAssistancePage,
    CameraQrPage,
    EventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventServiceProvider,
    PersonServiceProvider,
    AssistanceProvider,
    ScheduledEventsProvider,


  ]
})
export class AppModule {}
