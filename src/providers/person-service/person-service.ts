import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventServiceProvider Provider');
  }

  // apiUrl = 'http://localhost:3000/api/v1';
  apiUrl = 'http://10.6.6.98:3000/api/v1';

  getPeople() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/student_enrollments').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

}
