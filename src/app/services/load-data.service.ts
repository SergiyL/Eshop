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

}
