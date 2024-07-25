import { Component, ElementRef, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/menu/Model/Menus';
import { MenuService } from 'src/app/menu/Services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Cart: any = [];
  @Input() title: string = "";
  @Input() data: any[] = [];
  @Output() selectedCategory = new EventEmitter<string>();
  isImageVisible = true;
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.getCartProduct()
  }
  detectedChanges(event: any): void {
    this.selectedCategory.emit(event);
  }
  getCartProduct() {
    if ("cart" in localStorage) {
      this.Cart = JSON.parse(localStorage.getItem("cart"));
      console.log(this.Cart)
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const imageElement = this.elementRef.nativeElement.querySelector('.banner');
    const rect = imageElement.getBoundingClientRect();
    const imageBottom = rect.bottom;
    this.isImageVisible = imageBottom > 0;
  }

}
