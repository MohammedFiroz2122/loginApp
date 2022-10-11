import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any


  constructor(private readonly fb:FormBuilder,private readonly service:ServiceService) { }
  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:[null],
      password:[null]
    })

  }

  login():void{
    this.service.saveLoginDetails(this.loginForm.value)
    
  }
}
