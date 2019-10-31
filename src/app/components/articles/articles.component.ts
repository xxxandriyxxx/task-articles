import {Component, OnDestroy, OnInit} from '@angular/core';
import {Article} from '../../models/Article';
import {ArticleService} from '../../services/article.service';
import {CartData} from '../../models/CartData';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  shoppingCart: CartData[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticles();
    if (localStorage.getItem('_shoppingCart')) {
      this.shoppingCart = JSON.parse(localStorage.getItem('_shoppingCart'));
    }
  }

  ngOnDestroy() {
    localStorage.setItem('_shoppingCart', JSON.stringify(this.shoppingCart));
  }

  getArticles() {
    this.articles = this.articleService.getArticles();
  }


  addToCart(article: Article) {
    const item = this.shoppingCart.find(cartData => cartData.articleId === article.id);
    if (item) {
      item.amount += 1;
    } else {
      const newCartData = new CartData(article.id, 1);
      this.shoppingCart.push(newCartData);
    }
    console.log(JSON.stringify(this.shoppingCart));
  }



}
