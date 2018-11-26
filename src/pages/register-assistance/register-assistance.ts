import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScheduledEventsProvider } from '../../providers/scheduled_events-service/scheduled_events-service';
import { PersonServiceProvider } from '../../providers/person-service/person-service';

/**
 * Generated class for the RegisterAssistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-assistance',
  templateUrl: 'register-assistance.html',
})
export class RegisterAssistancePage {

  scheduledEvents:any;
  people:any;

  assistancePeoples:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public scheduledEventsProvider: ScheduledEventsProvider,public personServiceProvider: PersonServiceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAssistancePage bsdfsdf');

    let list_events = this.navParams.get('list_event').id;


    this.scheduledEventsProvider.getScheduledEvents()
    .then(data => {
      this.scheduledEvents = data;
      this.Load(list_events);
    });




  }
  Load(list_events) {
    //
    // console.log(this.scheduledEvents)
    // console.log(list_events)

    let assistanceId =  [];
    for (let numero of this.scheduledEvents){
      if (numero.id == list_events) {
        let  num = numero
        for (let idea of num.student_assistances){
          assistanceId.push(idea.student_enrollment_id);

        }
        this.personServiceProvider.getPeople()
        .then(data => {
          this.people = data;
          this.LoadAss(assistanceId)

        });
        break
      }

    }

  }
  LoadAss(assistanceId) {
    this.assistancePeoples = [];
    for (let num of this.people){

      for (let numero of assistanceId){
        if (num.id == numero) {


            this.assistancePeoples.push({
              name: num.person.name,
              lastName: num.person.lastName,
              dni: num.person.dni
            });
              console.log(this.assistancePeoples)
        }

       }
    }


  }


}
