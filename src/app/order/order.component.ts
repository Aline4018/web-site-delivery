import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItem} from '../restaurant-detail/shoping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  delivery = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Refeição', value: 'REF'}
  ];


  constructor( private orderService: OrderService) { }

  ngOnInit() {
  }
  itemsValue(): number {
    return this.orderService.itemsValue();
  }
  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }
  increaseQty(item: any) {
    this.orderService.increaseQty(item);
  }
  decreaseQty(item: any) {
    this.orderService.decreaseQty(item);
  }
  remove(item: CartItem) {
    this.orderService.remove(item);
  }
}
