import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { EventsPage } from '../events/events';


/**
 * Generated class for the LoginUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-up',
  templateUrl: 'login-up.html',
})
export class LoginUpPage {

 @ViewChild('email') email;
 @ViewChild('password') password;
  constructor(public navCtrl: NavController, public navParams: NavParams  ,public alertCtrl :AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUpPage');
  }
  login(){
   if(this.email.value == "admin@gmail.com" && this.password.value == "123456"){
    this.navCtrl.setRoot(EventsPage);
   }else{
    let alert = this.alertCtrl.create({
     title: 'Datos incorrectos',
     subTitle: 'Los datos ingresados son incorrectos.',
     buttons: ['OK']
    });
    alert.present();
   }
 }
}
