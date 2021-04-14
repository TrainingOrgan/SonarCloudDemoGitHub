import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISuperhuman } from '../models/superhuman';
import { IUserAccount } from '../models/useraccount';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor( private myHttpCli: HttpClient) { }

  /////////////////////LANDING COMPONENT

  firstRequest(primaryKey: number): Observable<ISuperhuman> {
    return this.myHttpCli.get<ISuperhuman>(`http://localhost:9005/api/shuman/${primaryKey}`);
  }

  secondRequest(): Observable<ISuperhuman[]> {
    return this.myHttpCli.get<ISuperhuman[]>(`http://localhost:9005/api/shuman`);
  }

  thirdRequest(newSHuman: ISuperhuman): Observable<string> {
    const httpPost = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    console.log(newSHuman);

    return this.myHttpCli.post<string>(`http://localhost:9005/api/shuman`, newSHuman, httpPost);
  }

  ///////////////SESSION COMPONENT

  /* If you want your server to remember who you are...you'll have to send them your credentials so it can verfiy your identity.
    we do this using the {withCredentials: true} portion of the HttpRequest
*/
  infoRequest(): Observable<HttpResponse<IUserAccount>> {
    return this.myHttpCli.get<HttpResponse<IUserAccount>>('http://localhost:9005/api/useraccount',
      {withCredentials: true});
  }

  loginRequest(): Observable<HttpResponse<string>> {
    let myUser: IUserAccount = {
      'username': 'Deku',
      'password':  'Michigan Smash',
      'secretIdentity': 'Midoriya'
    }

    return this.myHttpCli.post<HttpResponse<string>>('http://localhost:9005/api/useraccount/login', myUser,
    {withCredentials: true});
  }

  logoutRequest(): Observable<HttpResponse<string>> {
    return this.myHttpCli.post<HttpResponse<string>>('http://localhost:9005/api/useraccount/logout', {},
      {withCredentials: true});
  }
}
