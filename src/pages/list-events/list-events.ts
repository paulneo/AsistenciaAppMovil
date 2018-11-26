import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraQrPage } from '../camera-qr/camera-qr';
import { RegisterAssistancePage } from '../register-assistance/register-assistance';




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

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad(){
    this.assistance = "Registrar";


    this.list_events = this.navParams.get('event').scheduled_event;
    console.log(this.navParams.get('event').scheduled_event)



  }

  eventRegister(list_event){

    this.navCtrl.push(CameraQrPage, {
      list_event: list_event
    });
  }
  assitanceRegister(list_event){

      this.navCtrl.push(RegisterAssistancePage, {
        list_event: list_event
      });
  }

  // pushEvent(events) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.navCtrl.push(CameraQrPage, {
  //     name:events
  //  });
  // }

}
