import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsService} from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.component.html'
})
export class EditItemComponent {
  item: {
    name: string,
    desc: string,
    price: number,
    url: string
  }
 constructor(private itemService: ItemsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    let index = this.route.snapshot.params['id'];
    this.item = this.itemService.Items[index];
  }

  saveItem(){
    let index = this.route.snapshot.params['id'];
    this.router.navigate(['/item', index]);
  }

}
