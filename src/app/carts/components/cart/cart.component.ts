import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  CartProduct: any[] = [];
  success: boolean = false;
  total: number = 0;
  product: Object;
  constructor(private service: CartsService) { }
  ngOnInit(): void {
    this.getCartProduct();
  }
  getCartProduct() {
    if ("cart" in localStorage) {
      this.CartProduct = JSON.parse(localStorage.getItem("cart")) || [];
      this.getCartTotal();
    }
  }
  updateQuantity() {
    this.getCartTotal();
  }
  getCartTotal() {
    let total = 0;
    for (let item of this.CartProduct) {
      total += item.item.price * item.quantity;
    }
    this.total = +total.toFixed(2);
    localStorage.setItem("cart", JSON.stringify(this.CartProduct));
  }
  Addamount(index: number) {
    this.CartProduct[index].quantity++;
    this.getCartTotal();
  }
  Mins(index: number) {
    if (this.CartProduct[index].quantity > 1) {
      this.CartProduct[index].quantity--;
      this.getCartTotal();
    }
  }
  detecrchange() {
    this.getCartTotal();
  }
  removeItem(index: number) {
    this.CartProduct.splice(index, 1);
    this.getCartTotal();
  }
  clearCart() {
    this.CartProduct = [];
    this.total = 0;
    localStorage.setItem("cart", JSON.stringify(this.CartProduct));
  }
  addCart() {
    let products = this.CartProduct.map(item => {
      return { productId: item.item.id, quantity: item.quantity };
    });
    let model = {
      userId: 5,
      date: new Date(),
      products: products,
    };
    this.service.createNewCart(model).subscribe(res => {
      this.success = true;
      this.product = res;
      localStorage.setItem("cart", JSON.stringify(this.CartProduct));
    });
  }
}
