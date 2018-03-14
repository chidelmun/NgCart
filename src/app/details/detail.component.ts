import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import {ItemsService} from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  constructor(private itemsService: ItemsService, private route: ActivatedRoute, private router: Router) {}
  item: any;
  ngOnInit(){
    let index = this.route.snapshot.params['id'];
    this.item = this.itemsService.Items[index];
    this.route.params.subscribe((params)=>{
      this.router.navigate(['/item', index]);
    });
  }

}
