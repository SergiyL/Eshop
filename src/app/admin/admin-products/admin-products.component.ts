import { Product } from './../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadDataService } from '../../services/load-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit , OnDestroy{
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private loadDataServ: LoadDataService,
              private route: ActivatedRoute,
              private router: Router) { 
    this.subscription = this.loadDataServ.getAll()
      .subscribe(products => this.products = this.filteredProducts = products);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterProduct(prod: string) {
    this.filteredProducts = (prod) ?
      this.products.filter(p => p.title.toLowerCase().includes(prod.toLowerCase())) :
      this.products;
  }


}
