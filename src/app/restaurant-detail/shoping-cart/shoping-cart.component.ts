import { Component, OnInit } from '@angular/core';

import{ShopingCartService} from './shoping-cart.service';

@Component({
  selector: 'mt-shoping-cart',
  templateUrl: './shoping-cart.component.html',
})
export class ShopingCartComponent implements OnInit {

  constructor(private shopingCartService: ShopingCartService) { }

  ngOnInit() {
  }
items(): any[] {
    return this.shopingCartService.items;
}
clear() {
    this.shopingCartService.clear();
}
removeItem(item: any) {
    this.shopingCartService.removeItem(item);
}
addItem(item: any) {
  this.shopingCartService.addItem(item);
}
total(): number {
    return this.shopingCartService.total();
}
}
