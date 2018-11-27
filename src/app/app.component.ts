import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';

import { UsersProvider } from '../providers/user-service/user-service';
import { LoginUpPage } from '../pages/login-up/login-up';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginUpPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private usersProvider:UsersProvider) {

    if (this.usersProvider.isLogged() === true) {
      this.rootPage = HomePage;
    }else{
      this.rootPage = LoginUpPage;
    }
    this.rootPage = LoginUpPage;
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Eventos', component: EventsPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
