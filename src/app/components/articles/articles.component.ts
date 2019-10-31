import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/Article';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articles = this.articleService.getArticles();
  }


  addToCart(article: Article) {

  }
}
