import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Products } from '../models/product.model';
import { ProductResponse } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // product: Products[]=[]

  private Url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductResponse>{
    return this.http.get<ProductResponse>(this.Url);
  }


}
