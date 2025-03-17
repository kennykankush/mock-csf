import { Component, OnInit, inject } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { CartStore } from './cart.store';
import { LineItem } from './models';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // NOTE: you are free to modify this component

  private router = inject(Router)
  private store = inject(CartStore)

  itemCount!: number;
  lineItemsSlice!: LineItem[];

  ngOnInit(): void {
    this.checkItem();
  }

  checkout(): void {
    if (this.itemCount === 0){
      alert("Cart is empty");
      return
    }
    this.router.navigate([ '/checkout' ])

  }

  checkItem(){
     this.store.lineItems$.subscribe(
      (products) => {
        this.itemCount = products.length;
        this.lineItemsSlice = products;
        console.log(this.lineItemsSlice);
      }
    )

  }
}
