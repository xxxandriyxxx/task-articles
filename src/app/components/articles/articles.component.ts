import {Component, OnDestroy, OnInit} from '@angular/core';
import {Article} from '../../models/Article';
import {ArticleService} from '../../services/article.service';
import {CartData} from '../../models/CartData';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  shoppingCart: CartData[] = [];
  totalAmount = 0;

  constructor(private articleService: ArticleService,
              private appComponent: AppComponent) {
  }

  ngOnInit() {
    this.getArticles();
    if (localStorage.getItem('_shoppingCart')) {
      this.shoppingCart = JSON.parse(localStorage.getItem('_shoppingCart'));
      for (const cartData of this.shoppingCart) {
        this.totalAmount += cartData.amount;
      }
    }
  }

  ngOnDestroy() {
    if (this.shoppingCart.length !== 0) {
      localStorage.setItem('_shoppingCart', JSON.stringify(this.shoppingCart));
    }
  }

  getArticles() {
    this.articles = this.articleService.getArticles();
  }


  addToCart(article: Article) {
    const item = this.shoppingCart.find(cartData => cartData.article.id === article.id);
    if (item) {
      item.amount += 1;
    } else {
      const newCartData = new CartData(article, 1);
      this.shoppingCart.push(newCartData);
    }
    this.totalAmount += 1;
    this.appComponent.setTotalAmount(this.totalAmount);
  }


}
