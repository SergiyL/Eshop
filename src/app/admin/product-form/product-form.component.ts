import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../services/load-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  viewMode = 'empty';
  product = {};
  id;

  constructor(private loadDataServ: LoadDataService,
              private router: Router,
              private route: ActivatedRoute) { 
    this.categories$ = loadDataServ.getData();
    this.id = this.route.snapshot.params['id'];
    if(this.id) this.loadDataServ.getProduct(this.id).take(1).subscribe(p => this.product = p);
  }

  ngOnInit() {
  }

  selectCategoryFilter($event) {
    this.viewMode = $event.target.value
  }

  saveProduct(product) {
    if(this.id) this.loadDataServ.updateProduct(this.id, product);
    else this.loadDataServ.createProduct(product);

    this.router.navigate(['/admin/products']);
  }

  deleteProduct() {
    if(!confirm("Точно видалити?")) return;

    this.loadDataServ.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);
  }

}
