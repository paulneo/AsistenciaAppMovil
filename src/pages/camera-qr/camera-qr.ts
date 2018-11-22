import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PersonServiceProvider } from '../../providers/person-service/person-service';
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
  people:any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,public personServiceProvider: PersonServiceProvider) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraQrPage');

    this.personServiceProvider.getPeople()
    .then(data => {
      this.people = data;


    });

    // for (let i = 0; i < this.people.length; i++) {
    //    console.log(this.people[i]);
    // }
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }
  scanCode(){

    console.log(this.people)
    for (let numero of this.people){
      console.log(numero.person.id);
      if (numero.person.id == 1) {
          console.log(numero.person.name)
      }
    }
    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;


    })

  }
}
