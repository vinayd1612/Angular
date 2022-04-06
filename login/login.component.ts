import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid:any;
  password:any;

  formdata:FormGroup=new FormGroup({
    uidd:new FormControl("",Validators.required),
    passwordd:new FormControl("",Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  validate()
  {
    if(this.uid=='admin' && this.password=='admin')
    {
      console.log("Authenticated");
    }
    else
    console.log("Invalid User");
  }

}
