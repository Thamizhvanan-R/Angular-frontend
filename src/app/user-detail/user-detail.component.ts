import { Component, OnInit } from '@angular/core';
import { User } from '../UserInterface'
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User;

  constructor(userservice : UserService) { 
    this.user = userservice.getUser();
    this.user.Phone = "7708485122";

  }

  ngOnInit() {
  }

}