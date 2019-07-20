import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginform:FormGroup;
  Authservice:AuthenticationService;
  emailpattern = "^[a-z0-9]+@[a-z]+.(com|net|in)$"

  constructor(fb:FormBuilder,_authservice:AuthenticationService) {
    this.Authservice= _authservice;
    this.loginform = fb.group({
      username:['',Validators.required],
      email:[],
      password:['',Validators.required]
    });
   }

  ngOnInit() {
  }

  Submit(){
    console.log(this.loginform.value);
    console.log('api call happening 2');
    this.Authservice.login(this.loginform.value);
  }

}