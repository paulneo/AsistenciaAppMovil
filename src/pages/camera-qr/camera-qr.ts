import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
  qrData=null;
  scannedCode=null;
  event:any


  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraQrPage');
    this.event = this.navParams.get('name');
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;
    })
  }
}
