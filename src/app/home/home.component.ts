import {Component, ViewEncapsulation , OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

import {ItemsService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  Items = [];
  @Input() index: number;
  constructor(private itemsService: ItemsService, private router: Router) {}
  ngOnInit(){
    this.Items = this.itemsService.getAllItems();
  }

  addToCart(itemData){
    this.itemsService.pushToCart(itemData);
  }
  getTotal(){
    // let total = 0;
    // for(let i=0; i< this.Items.length; i++){
    //   total += this.Items[i].price;
    // }
    return this.itemsService.cart.length;
  }
  editItem(id: number){
    this.router.navigate(['/item', id, 'edit'], {queryParams: {allowEdit: true}});
  }

}
