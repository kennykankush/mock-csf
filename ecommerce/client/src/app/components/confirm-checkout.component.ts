import { Component, inject, OnInit } from '@angular/core';
import { CartStore } from '../cart.store';
import { Cart, LineItem, Order } from '../models';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-confirm-checkout',
  standalone: false,
  templateUrl: './confirm-checkout.component.html',
  styleUrl: './confirm-checkout.component.css'
})
export class ConfirmCheckoutComponent implements OnInit{

  carts!: LineItem[]
  total: number = 0;
  checkoutFormDetails! : FormGroup;

  private store = inject(CartStore);
  private fb = inject(FormBuilder);
  private svc = inject(ProductService);  //HTTP POST

  // TODO Task 3
  ngOnInit(): void {
    this.createForm();
    this.checkCart()
      
  }

  onSubmit(): void {
    const order: Order = {
      name: this.checkoutFormDetails.value.name,
      address: this.checkoutFormDetails.value.address,
      priority: this.checkoutFormDetails.value.priority,
      comments: this.checkoutFormDetails.value.comments,
      cart: { lineItems : this.carts}
    };

    this.svc.checkout(order).subscribe(
      {
        next: (response:any) => {
          alert(response.response);
        },
        error: (error) => {
         alert(error);
        },
        complete: () => console.log("Posted to Controller")
      }
    )

  }

  createForm(): FormGroup {
    return this.checkoutFormDetails = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      priority: [false],
      comments: ['']
    })
  }

  checkCart(){
    this.store.lineItems$.subscribe(
      (carts) => {
        this.carts = carts;

        carts.forEach(
          cart => {
            this.total=+ cart.price * cart.quantity;
          }
        )
      }
    )
    
  }


}
