import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comments';
  uid='admin';
  password='admin';

  constructor(private router:Router)
  {
  
  }

  validate()
  {
    console.log(this.uid);
    if(this.uid=='admin' && this.password=='admin')
    {
      console.log("Authorized..");
      this.router.navigateByUrl("menu");
    }
    else
    {
      console.log("Not Authorized..");
      this.router.navigateByUrl("register");
    }
    
  }
}
