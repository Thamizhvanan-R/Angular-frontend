import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthenticationService {

  backend_url = "https://agjee7yg.apps.lair.io/";
  api_login = "rest-auth/login";
  api_logout = "/rest-auth/logout/";
  api_ = [
    "/rest-auth/password/reset/",
    "/rest-auth/password/reset/confirm/ ",
    "/rest-auth/password/change/ (POST)",
    "/rest-auth/user/ (GET, PUT, PATCH)",
    "/rest-auth/registration/ (POST)",
  ];
  http:HttpClient;
  private Token_key:string;

  constructor(_http:HttpClient) {
    this.http=_http;
   }

  login(data:any){
     const req = this.http.post("https://agjee7yg.apps.lair.io/rest-auth/login/", data)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}