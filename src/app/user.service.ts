import { Injectable } from '@angular/core';
import { User, basicDetails , address } from './UserInterface'
import { Observable } from 'rxjs';
import { Publisher } from './publisher'
import { Client } from './client'

@Injectable()
export class UserService implements Publisher {

  private user: User;
  Clients:Client[];

  constructor() {
    this.Clients = [];
    let BasicDetail: basicDetails = {Username:"Thamizhpriyan",Password:"..",
     FirstName: "Thamizh", LastName: "vanan",Email:"jasper@rex.com" };
    let Address: address = { Pincode: 560066 };
    this.user = { BasicDetail:BasicDetail, Address: Address, Gender: "Male",};
    console.log("Inside Service" + JSON.stringify(this.user));
  }

  getUser(): User {
    let user1: User = this.user;
    user1.Address.City = "Bengaluru";
    console.log("modified user " + JSON.stringify(user1))
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  getfiedlvalue(key:string):any{
    return (this.user[key]);
  }

  setfieldvalue(key:string,value:any){
    this.user[key] = value;
    this.publish()
  }

  subscribe(client:Client):Boolean{
    this.Clients.push(client);
    return true;
  }

  unsubscribe(client:Client):Boolean{
    // TODO to remove the client from the active clien
    return true;
  }

  publish(){
    for(let client of this.Clients){
     console.log("Publish method run for client "+client.ClientName+" status :"+client.run(this.user));
    }
  }
}