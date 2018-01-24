import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire4/database';

@Injectable()
export class LoadDataService {

  constructor(private db: AngularFireDatabase ) { }

  getData() {
    return this.db.list('/categories');
  }

  createProduct(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products');
  }

  getProduct(productId) {
    return this.db.object('/products/' + productId);
  }

  updateProduct(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId) {
    return this.db.object('/products/' + productId).remove();

  }

}
