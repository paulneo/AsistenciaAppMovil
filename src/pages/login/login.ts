import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { UsersProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCrtl :AlertController, private usersProvider:UsersProvider) {
  }

  login(FormLogin){
    this.usersProvider.login(FormLogin.value).subscribe(data =>{
      if (data.succes === true) {
          this.navCtrl.setRoot(HomePage);
      }else{
        FormLogin.password = '';
        let alert = this.alertCrtl.create({
          title:'Login Falied',
          subTitle: data.message,
          buttons: ['OK']
        })
        alert.present();
      }
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');



  }

}
