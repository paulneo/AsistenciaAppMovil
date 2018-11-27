import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/user-service/user-service';

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

  login:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public usersProvider:UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    this.usersProvider.getUsers()
    .then(data => {
      this.login = data;
        for (let num of this.login){
          console.log(num.encrypted_password)
          if (num.encrypted_password == "123456") {
            console.log("Holi")

          }

        }
    });

  }

}
