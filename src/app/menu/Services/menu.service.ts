import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private baseUrl = 'https://restaurant-82bf3-default-rtdb.firebaseio.com/products.json';
  constructor(private http: HttpClient) { }
getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error fetching all products:', error);
        return throwError('Something went wrong while fetching all products.');
      })
    );
  }
getAllCategiores(){
    return this.http.get('https://restaurant-82bf3-default-rtdb.firebaseio.com/category.json')
  }
getProductCategory(keyword: string): Observable<any[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<any[]>(url).pipe(
      map(data => {
        // Assuming data is an object where each key is a product category
        const products = Object.values(data); // Convert object values to array of products
        const filteredProducts = products.filter((product: any) => product.category === keyword);
        return filteredProducts;
      }),
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError('Something went wrong while fetching products.');
      })
    );
  }
getProductAll(id: any): Observable<any> {
    const url = `https://restaurant-82bf3-default-rtdb.firebaseio.com/products/${id}.json`;
    return this.http.get(url);
  }
}
