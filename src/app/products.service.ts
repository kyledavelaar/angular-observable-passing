import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ProductModel } from './product.model';

@Injectable()
export class ProductsService {
  private url = 'https://tester-cd37e.firebaseio.com/products.json';
  
  constructor(private http: Http) {}

  getProducts() {
    return this.http.get(this.url)
      .map (
        (response: Response) => {
          const data = response.json();
          console.log(data);
        }
      )
  }

}