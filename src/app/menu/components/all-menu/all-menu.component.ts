import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../Services/menu.service';
import { Product } from '../../Model/Menus';

@Component({
  selector: 'app-all-menu',
  templateUrl: './all-menu.component.html',
  styleUrls: ['./all-menu.component.css'],
})

export class AllMenuComponent implements OnInit {
  products:Product[]=[];
  categories :any[]=[];
  loading :boolean =false;
  CartProduct: any;
constructor(private service: MenuService) {}
ngOnInit(): void {
  this.getProducts();
  this.getCategory();}
getCategory(): void {
  this.loading = true;
  this.service.getAllCategiores().subscribe(
    (data: any[]) => {
      this.categories = data;
      this.categories.push('ALL');
      this.loading = false;
    },
    (error) => {
      this.loading = false;
      console.error('Error fetching categories:', error);
    }
  );}
getProducts(): void {
  this.loading = true;
  const productId = 0;
  this.service.getAllProducts().subscribe(
    (data: Product[]) => {
      this.loading = false;
      this.products = data;
    },
    (error) => {
      this.loading = false;
      console.error('Error fetching products:', error);
    }
  );
}
getAllCategories(): void {
  this.loading = true;
  this.service.getAllCategiores().subscribe(
    (data: string[]) => {
      this.loading = false;
      this.categories = data;
    },
    (error) => {
      this.loading = false;
      console.error('Error fetching categories:', error);
    }
  );
}
filter(event: any): void {
  let value = event.target.value;
  if (value === 'ALL') {
    this.getProducts();
  } else {
    this.getProductCategories(value);
  }
}
getProductCategories(keyword: string): void {
  this.loading = true;
  this.service.getProductCategory(keyword).subscribe(
    (data: any[]) => {
      this.loading = false;
      this.products = data;
      console.log(this.products);
    },
    (error) => {
      this.loading = false;
      console.error('Error fetching products:', error);
    }
  );
}

  AddToCart(event: any) {
     // JSON.stringify    => send data
    // JSON.parse()      => receive data
    if ("cart" in localStorage) {
      // Retrieve cart items from localStorage and parse as JSON
      this.CartProduct = JSON.parse(localStorage.getItem("cart"));
      // Check if an item with the same id already exists in CartProduct
      let exist = this.CartProduct.find(item => item.item.id === event.item.id);
      console.log(exist)
      if (exist) {
        // If item with the same id exists, alert the user or handle it as needed
        alert("Item already exists in the cart.");
        // Optionally, you can update the quantity of the existing item
        exist.quantity += event.quantity;
      } else {
        // If item with the same id does not exist, add the new item (event) to the CartProduct array
        const find= this.CartProduct.push({ item: event.item, quantity: event.quantity });
        console.log(find)
      }
    } else {
      // If "cart" key does not exist in localStorage
      // Initialize CartProduct array with the new item (event)
      this.CartProduct = [{ item: event.item, quantity: event.quantity }];
      console.log(this.CartProduct)
    }
    // Update localStorage with the updated CartProduct array
    localStorage.setItem("cart", JSON.stringify(this.CartProduct));
  }
}

