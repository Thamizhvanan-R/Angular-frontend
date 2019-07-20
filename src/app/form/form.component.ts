import { Component, OnInit } from '@angular/core';
import { User } from '../UserInterface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ValidatePassword  } from './password-validator'
import { UserService } from '../user.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Genders = ["Male", "Female", "Others"];
  
  userservice:UserService
  user: User = null;
  
  fb:FormBuilder;
  public form1:FormGroup;

  pinpattern = "[1-9][0-9]{5}"
  emailpattern = "^[a-z0-9]+@[a-z]+.(com|net|in)$"
  
  private password;
  assist:Boolean =false;
  passwordErrorMsg = [{
    'Error':'Minlength',
    'Message':'Password should contain minimun 8 characters'
  },
  {
    'Error':'Lowercase',
    'Message':'Password should contain minimun 1 lower case character'
  },
  {
    'Error':'Uppercase',
    'Message':'Password should contain minimun 1 upper case character'
  },
  {
    'Error':'Specialchar',
    'Message':'Password should contain minimun 1 specialcharacter'
  },
  {
    'Error':'Numeral',
    'Message':'Password should contain minimun 1 number'
  },
  ] 

  constructor(fb:FormBuilder,userservice:UserService) {
    this.fb= fb;
    this.userservice = userservice
    this.user = this.userservice.getUser();
    console.log(this.user);
  }

  ngOnInit() {
    this.form1 = this.fb.group({
      Name: this.fb.group({
        FirstName : [this.user.BasicDetail.FirstName, Validators.required],
        LastName : [this.user.BasicDetail.LastName]
      }),
      Avatar:[],
      Email: [this.user.BasicDetail.Email, Validators.required],
      Password:[this.user.BasicDetail.Password,ValidatePassword],
      Gender: [this.user.Gender, Validators.required],
      Phone: [this.user.Phone, Validators.required],
      Address: this.fb.group({
        Door: [this.user.Address.Door],
        Street: [this.user.Address.Street],
        City: [this.user.Address.City],
        Pincode: [this.user.Address.Pincode]
      })
    });
  }

  toggleassist(val:Boolean){
    this.assist = val;
  }

  assistval():Boolean{
    return this.assist;
  }

  getCssClass(valid:Boolean):string{
    let validpass = this.form1.controls['Password'].errors;
    if(valid == true || validpass == null) return 'valid-pass';
    else return 'invalid-pass';
  }

  GenderChange(event){
    console.log("Gender changed to "+event.target.value);
    this.userservice.setfieldvalue('Gender',event.target.value);
  }

  Submit(): void {
    this.userservice.setUser(this.form1.value);
    console.log("submit value");
  }

}