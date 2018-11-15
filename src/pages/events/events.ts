import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { CameraQrPage } from '../camera-qr/camera-qr';
import { ListEventsPage } from '../list-events/list-events';

import { EventServiceProvider } from '../../providers/event-service/event-service';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventServiceProvider: EventServiceProvider) {


  }

  ionViewDidLoad(){
    this.eventServiceProvider.getEvents()
    .then(data => {
      this.events = data;
      console.log(this.events);
    });
  }

eventSelected(){
  this.navCtrl.push(ListEventsPage);

  }

}
