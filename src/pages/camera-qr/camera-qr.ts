import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CameraQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera-qr',
  templateUrl: 'camera-qr.html',
})
export class CameraQrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.event = navParams.get('name');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraQrPage');
  }

}
