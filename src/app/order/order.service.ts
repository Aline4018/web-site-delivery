import {Injectable} from '@angular/core';
import {ShopingCartService} from '../restaurant-detail/shoping-cart/shoping-cart.service';
import {CartItem} from '../restaurant-detail/shoping-cart/cart-item.model';


@Injectable ()
export class OrderService {

  constructor(private cartService: ShopingCartService) {}

    cartItems(): CartItem[] {
    return  this.cartService.items;
    }

    increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
    }
    decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }
  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

}
