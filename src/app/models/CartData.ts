import {Article} from './Article';

export class CartData {

  constructor(
    public article: Article = null,
    public amount: number = null
  ) {
  }

}
