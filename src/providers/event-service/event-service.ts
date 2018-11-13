import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventServiceProvider Provider');
  }
  // getEvents() {
  //   return this.http.get('http://localhost:3000/api/v1/events');
  //   console.log('holi')
  // }
  apiUrl = 'http://localhost:3000/api/v1/';
  getEvents() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/events').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
}
