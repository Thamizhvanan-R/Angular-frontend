import { Component, OnInit } from '@angular/core';
import { Client } from '../client'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.css']
})
export class UserPhotoComponent implements OnInit,Client {

  ClientName:string = "PhotoComponent";
  userservice:UserService

  Maleimg = "https://res.cloudinary.com/thamizhimage/image/upload/v1533450003/Personal%20Images/male.png";
  Femaleimg = "https://res.cloudinary.com/thamizhimage/image/upload/v1533450098/Personal%20Images/female.png";
  Neutralimg = "https://res.cloudinary.com/thamizhimage/image/upload/v1533544458/Personal%20Images/Neutral.png";
  url ;
  Gender:string;

  constructor(userservice:UserService) {
    this.userservice = userservice;
    this.userservice.subscribe(this);
    this.url = this.Maleimg;
   }

  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = (<FileReader>event.target).result;
        console.log(this.url);
      }
    }
  }

  run(user:any){
    this.Gender = user['Gender'];
    switch(this.Gender){
      case "Male":
        this.url = this.Maleimg;
        break;
      case "Female":
        this.url = this.Femaleimg;
        break;
      default:
        this.url = this.Neutralimg;
        break;
    }
    return true;
  }
}