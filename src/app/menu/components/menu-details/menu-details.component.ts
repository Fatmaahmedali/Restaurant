import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../Services/menu.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
;
@Component({
  selector: 'app-menu-details',
  templateUrl: '/src/app/menu/components/menu-details/menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  loading: boolean = false;
  data: any = [];
  id: any;
selectedProduct: any;
  constructor(private service: MenuService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id'); // Get id from route parameters
    console.log(this.id)
    this.getProductDetails();
  }
  getProductDetails() {
    this.loading = true;
    this.service.getProductAll(this.id).pipe(
      catchError(error => {
        console.error('Error fetching product details:', error);
        this.loading = false;
        return of(null);
      })
    ).subscribe(res => {
      this.data = res || {};
      this.loading = false;
      console.log(this.data)
    });
  }
}
