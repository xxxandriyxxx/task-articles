import { Injectable } from '@angular/core';
import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] = [
    {
      id: 1,
      name: 'article 1',
      label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 25
    },
    {
      id: 2,
      name: 'article 2',
      label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 35
    },
    {
      id: 3,
      name: 'article 3',
      label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 45
    }
  ];

  constructor() {
  }

  getArticles(): Article[] {
    return this.articles;
  }
}
