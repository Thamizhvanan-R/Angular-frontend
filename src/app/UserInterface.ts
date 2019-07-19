export interface User {
  BasicDetail:basicDetails,
  Phone?:string;
  Avatar?:any;
  Gender:string;
  Address?:address;
}
/*
export interface name{
  FirstName:string;
  LastName?:string;
} */
export interface basicDetails{
  Username:string;
  Password:string;
  FirstName?:string;
  LastName?:string;
  Email:string;
}

export interface address{
  Door?:number;
  Street?:string;
  City?:string;
  Pincode:number;
}