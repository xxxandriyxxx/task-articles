import {Component, OnInit} from '@angular/core';
import {CartData} from '../../models/CartData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalAmount: number = null;
  totalCost: number = null;
  shoppingCart: CartData[] = [];

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem('_shoppingCart')) {
      this.shoppingCart = JSON.parse(localStorage.getItem('_shoppingCart'));
    }
  }

  increaseAmount(cartData: CartData) {
    
  }

  reduceAmount(cartData: CartData) {
    
  }

  deleteArticle(cartData: CartData) {
    
  }
}
