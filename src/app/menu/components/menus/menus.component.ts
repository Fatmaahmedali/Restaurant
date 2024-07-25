import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  @Input() value: any = {};
  @Output() item = new EventEmitter<{ item: any, quantity: number }>();
  addButton: boolean = false;
  amount: number = 0;
  loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  Add() {
    this.item.emit({ item: this.value, quantity: this.amount });
  }




}
