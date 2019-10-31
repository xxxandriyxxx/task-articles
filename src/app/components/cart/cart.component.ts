import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartData} from '../../models/CartData';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  totalAmount = 0;
  totalCost = 0;
  shoppingCart: CartData[] = [];

  constructor(private appComponent: AppComponent) {
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

  ngOnDestroy() {
    if (this.shoppingCart.length !== 0) {
      localStorage.setItem('_shoppingCart', JSON.stringify(this.shoppingCart));
    }
  }

  increaseAmount(cartData: CartData) {
    this.totalAmount += 1;
    this.totalCost += cartData.article.price;
    cartData.amount += 1;
    this.appComponent.setTotalAmount(this.totalAmount);
  }

  decreaseAmount(cartData: CartData) {
    if (cartData.amount === 1) {
      this.deleteArticle(cartData);
    } else {
      this.totalAmount -= 1;
      this.totalCost -= cartData.article.price;
      cartData.amount -= 1;
    }
    this.appComponent.setTotalAmount(this.totalAmount);
  }

  deleteArticle(cartData: CartData) {
    this.totalAmount -= cartData.amount;
    this.totalCost -= cartData.article.price * cartData.amount;
    this.shoppingCart.splice(this.shoppingCart.indexOf(cartData), 1);
    this.appComponent.setTotalAmount(this.totalAmount);
    if (this.totalAmount === 0) {
      localStorage.removeItem('_shoppingCart');
    }
  }

}
