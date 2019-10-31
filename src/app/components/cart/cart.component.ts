import {Component, OnInit} from '@angular/core';
import {CartData} from '../../models/CartData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalAmount = 0;
  totalCost = 0;
  shoppingCart: CartData[] = [];

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem('_shoppingCart')) {
      this.shoppingCart = JSON.parse(localStorage.getItem('_shoppingCart'));
      for (const cartData of this.shoppingCart) {
        this.totalAmount += cartData.amount;
        this.totalCost += cartData.article.price * cartData.amount;
      }
    }
  }

  increaseAmount(cartData: CartData) {
    this.totalAmount += 1;
    this.totalCost += cartData.article.price;
    cartData.amount += 1;
  }

  decreaseAmount(cartData: CartData) {
    if (cartData.amount === 1) {
      this.deleteArticle(cartData);
    } else {
      this.totalAmount -= 1;
      this.totalCost -= cartData.article.price;
      cartData.amount -= 1;
    }
  }

  deleteArticle(cartData: CartData) {
    this.totalAmount -= cartData.amount;
    this.totalCost -= cartData.article.price * cartData.amount;
    this.shoppingCart.splice(this.shoppingCart.indexOf(cartData), 1);
    if (this.totalAmount === 0) {
      localStorage.removeItem('_shoppingCart');
    }
  }

}
