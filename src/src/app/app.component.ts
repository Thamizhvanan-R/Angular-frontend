import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
  title:string = "Angular Application";
  BindedVariable:string;
}
