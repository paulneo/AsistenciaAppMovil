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
  registrado:any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,public personServiceProvider: PersonServiceProvider , public http: Http) {



  }

  ionViewDidLoad() {

    this.personServiceProvider.getPeople()
    .then(data => {
      this.people = data;

    });

  }
  scanCode(){



    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;

                let headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');

        var url = 'http://10.6.6.98:3000/api/v1/student_assistances';
        let datos = {

          student_enrollment_id: parseInt(this.scannedCode),
          scheduled_event_id: this.navParams.get('list_event').id,
          assistance:"Temprano"
        };

        return new Promise(resolve => {
          this.http.post(url, JSON.stringify(datos), { headers: headers })
            .subscribe(data => {
                console.log(datos)
                console.log(data['_body']);
                console.log(data);
                if (data['_body'] == "false") {
                    this.registrado="El ALUMNO YA FUE REGISTRADO"
                }
                else{
                  this.registrado="Registro satisfactoriamente"
                }
            });
        });

    })

  }

}
