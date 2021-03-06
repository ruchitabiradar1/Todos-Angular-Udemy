import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username='ruchita'
   password=''
   errormsg='Invalid Credentials'
   invalidLogin=false

  constructor(private router:Router) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.username==="ruchita" && this.password==="bira")
    { //Redirect to Welcome page with username parameter 
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }
  }
}
