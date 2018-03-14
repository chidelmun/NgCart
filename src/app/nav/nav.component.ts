import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  implements OnInit {
  @Input() logged: boolean;
  constructor(private authService: AuthService){}
  ngOnInit(){
    this.authService.isAuthenticated().then((data: boolean)=>{
        this.logged = true;
    }).catch((state: boolean)=>{
        this.logged = false;
    });
  }

  @Input('grossTotal') totalPrice: number;

}
