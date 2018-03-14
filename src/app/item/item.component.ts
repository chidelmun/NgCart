import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsService} from '../data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

    constructor(private route: ActivatedRoute, private itemService: ItemsService, private router: Router){}
    //@Output() onItemAddedEvent: EventEmitter<any> = new EventEmitter<any>();
    @Input() index: number;
    @Input() currentItem: {name: string,
    desc: string,
    price: number,
    url: string};

    ngOnInit(){

    }
    editItem(){
      this.router.navigate(['/item', this.index, 'edit'], {queryParams: {allowEdit: true}});
    }
    addItem(){
      this.itemService.pushToCart(this.currentItem);
    }
}
