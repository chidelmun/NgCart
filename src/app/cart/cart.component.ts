import {Component, OnInit } from '@angular/core';
import {ItemsService} from '../data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})
export class CartComponent implements OnInit {
  constructor(private cartService: ItemsService) {}
  items = [];
  cost: number;
  ngOnInit() {
    this.items = this.cartService.getCart();
    if(this.items.length > 0){
      this.cost = this.cartService.getTotalCost();
    }
  }
}
