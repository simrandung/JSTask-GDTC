
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/service/product.service';
import { Products } from 'src/app/models/product.model';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  filteredProducts: Products[] = []; 
  filterTerm: string = ''; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
        this.products = data.products.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          category: item.category

        }));
        this.filteredProducts = [...this.products]; 
        console.log(this.products);
    });
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterTerm = filterValue.trim().toLowerCase();

    if (!this.filterTerm) {
      this.filteredProducts = [...this.products]; 
      return;
    }

    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.filterTerm) ||
      product.category.toLowerCase().includes(this.filterTerm)
    );
  }
}
