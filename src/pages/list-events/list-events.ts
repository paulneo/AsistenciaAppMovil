import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraQrPage } from '../camera-qr/camera-qr';


import { PersonServiceProvider } from '../../providers/person-service/person-service';

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
  assistance:any;
  list_events:any;
  people:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public personServiceProvider: PersonServiceProvider) {


  }

  ionViewDidLoad(){
    this.assistance = "Registrar";


    this.list_events = this.navParams.get('event').scheduled_event;
    console.log(this.navParams.get('event').scheduled_event)


    this.personServiceProvider.getPeople()
    .then(data => {
      this.people = data;
      console.log(this.people);
    });

  }

  eventRegister(list_event){

    this.navCtrl.push(CameraQrPage);
  }


  // pushEvent(events) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.navCtrl.push(CameraQrPage, {
  //     name:events
  //  });
  // }

}
