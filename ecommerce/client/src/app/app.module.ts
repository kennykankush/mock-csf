import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import {ProductService} from './product.service';
import { CategoryComponent } from './components/category.component';
import { OrderFormComponent } from './components/order-form.component';
import {ConfirmCheckoutComponent} from './components/confirm-checkout.component';

// NOTE: you are free to modify this file


const appRoutes: Routes = [{
  //View 0
  path: '',
  component: MainComponent
},
{
  //View 1
  path: 'category/:category', //https://angular.dev/guide/routing/common-router-tasks
  component: CategoryComponent
},
{
 //View 2
 path: 'checkout',
 component: ConfirmCheckoutComponent
},
{
  //Wildcard Redirect https://angular.dev/guide/routing/common-router-tasks
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}

]

@NgModule({
  declarations: [
    AppComponent, MainComponent, CategoryComponent,
    OrderFormComponent, ConfirmCheckoutComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }) //https://stackoverflow.com/questions/41121088/why-is-there-in-the-url-of-my-angular-app
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
