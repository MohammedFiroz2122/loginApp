import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form:any
  constructor(private readonly fb:FormBuilder,private readonly service:ServiceService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      username:[null],
      fullname:[null],
      password:[null]
    })

  }
    signup():void{
      
      this.service.saveDetails(this.form.value)
      
    }
}
