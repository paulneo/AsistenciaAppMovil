import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScheduledEventsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventServiceProvider Provider');
  }

  // apiUrl = 'http://localhost:3000/api/v1';
  apiUrl = 'http://192.168.122.1:3000/api/v1';

  getScheduledEvents() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/scheduled_events').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

}
