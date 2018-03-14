import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router){}
  username: string;
  password: string;
  loading: number;
  isLocked(){
    return this.authService.failed_attempts > 4;
  }

  ngOnInit(){
    this.loading = 0;
    this.updateRoute();
  }
  updateRoute(){
    if(this.isLocked()){
      console.log('ACCOUNT LOCKED');
      this.router.navigate(['/locked']);
    }
    console.log(this.isLocked());
  }

  onLogin(){
    this.loading = 1;
    this.authService.login(this.username, this.password);

    this.authService.isAuthenticated().then((data: boolean)=>{
      console.log('Logged In');
      this.router.navigate(['/']);
    }).catch((data: boolean)=>{
        console.log("Login FAILED:");
        this.loading = 2;
        console.log(this.loading);
        console.log(this.authService.failed_attempts);
        this.updateRoute();
    });

  }

}
