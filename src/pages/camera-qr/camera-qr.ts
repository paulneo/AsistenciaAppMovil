import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PersonServiceProvider } from '../../providers/person-service/person-service';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

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
  list_events:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,public personServiceProvider: PersonServiceProvider , public http: Http) {



  }

  ionViewDidLoad() {

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
    console.log(this.navParams.get('list_event').id)

    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let body = {
          registered_time: "2018-11-24T10:11:00.000Z",
          "student_enrollment": {
            id: parseInt(this.scannedCode)
          },
          "scheduled_event": {
            id: this.navParams.get('list_event').id,

          }
        };

        this.http.post('http://10.6.6.98:3000/api/v1/student_assistances', JSON.stringify(body), {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            console.log(data);
        });
    })

  }

}
