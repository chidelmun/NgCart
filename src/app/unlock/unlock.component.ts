import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './unlock.component.html'
})
export class UnlockComponent{
  constructor(private authService: AuthService, private router: Router){}
  unlockAccount(){
    this.authService.failed_attempts = 0;
    this.updateRoute();
  }
  updateRoute(){
    this.router.navigate(['/']);
  }
}
