import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraQrPage } from '../camera-qr/camera-qr';

/**
 * Generated class for the ListEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-list-events',
  templateUrl: 'list-events.html',
})
export class ListEventsPage {

  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.events = [
      { name: 'evento1'},
      { name: 'evento2'},
      { name: 'evento3'},
      { name: 'evento4'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListEventsPage');
  }
  pushEvent(events) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(CameraQrPage, {
      name:events
   });
  }

}
