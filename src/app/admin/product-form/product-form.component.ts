import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../services/load-data.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  viewMode = 'empty';

  constructor(private loadDataServ: LoadDataService) { 
    this.categories$ = loadDataServ.getData();

  }

  ngOnInit() {
  }

  selectFilter($event) {
    this.viewMode = $event.target.value
  }

  save(product) {
    this.loadDataServ.createProduct(product);
  }

}
