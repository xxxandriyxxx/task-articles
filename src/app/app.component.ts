import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  totalAmount = 0;

  ngOnInit() {
    if (localStorage.getItem('_shoppingCart')) {
      const shoppingCart = JSON.parse(localStorage.getItem('_shoppingCart'));
      for (const cartData of shoppingCart) {
        this.totalAmount += cartData.amount;
      }
    }
  }

  setTotalAmount(amount: number) {
    this.totalAmount = amount;
  }

}
