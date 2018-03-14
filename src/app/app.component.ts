import { Component, ViewEncapsulation , OnInit, Input} from '@angular/core';

import {ItemsService} from './data.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  isLogged: boolean;
  ngOnInit(){
    this.isLogged = this.authService.isLoggedIn;
    console.log(this.isLogged);
  }
  constructor(private itemService: ItemsService, private authService: AuthService){}
  getTotal(){
    return this.itemService.cart.length;
  }

}
