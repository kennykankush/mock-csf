import { ComponentStore } from "@ngrx/component-store";
import { LineItem, Product } from "./models";
import { Injectable } from "@angular/core";

export interface LineItemState {
    lineItemsSlice: LineItem[],
}

// TODO Task 2
@Injectable({
    providedIn: 'root'
})

// Use the following class to implement your store

export class CartStore extends ComponentStore<LineItemState>{

    constructor(){
        super ({ lineItemsSlice: []});
    }

    //Selector
    readonly lineItems$ = this.select(state => state.lineItemsSlice);
    
    //Updaters
    readonly addToCart = this.updater((state, lineItem: LineItem) => ({
    ...state, 
    lineItemsSlice: [...state.lineItemsSlice, lineItem]
}));


}
