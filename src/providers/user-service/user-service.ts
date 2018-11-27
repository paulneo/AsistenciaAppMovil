import { Http, Response , Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  baseUrl = 'http://192.168.122.1:3000/v2/users';
  constructor(public http: Http) {
    console.log('Hello EventServiceProvider Provider');
  }

  // apiUrl = 'http://localhost:3000/api/v1';
  createAuthorizationHeader(headers: Headers){
    headers.append('Authorization' , window.localStorage.getItem('authentication_token'));
  }
  getUsers() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(this.baseUrl,{
      headers:headers
    }).map(res => res.json());

  }
  login(data){
    return this.http.post(this.baseUrl, data)
    .map(this.extractData);
  }
  isLogged(){
    if(window.localStorage.getItem('authentication_token')){
      return true
    }else{
      return false
    }
  }


  logout(){
    window.localStorage.removeItem('authentication_token');
    return true;
  }
  private extractData(res: Response){
    let body = res.json();
    if (body.succes === true) {
        window.localStorage.setItem('authentication_token', body.authentication_token);
    }
    return body || {};
  }
}
