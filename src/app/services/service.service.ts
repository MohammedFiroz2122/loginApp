import { Injectable } from '@angular/core';
import { LoginForm } from '../models/login';
import { SignupForm } from '../models/signup';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  database:SignupForm[]=[]
  login_database:LoginForm[]=[]
  constructor() { }

  saveDetails(formData:SignupForm):void{
    this.database.push(formData);
    
  }
  saveLoginDetails(loginFormData:LoginForm):void{
    this.login_database.push(loginFormData);
    console.log(this.login_database);
    

  }
}
