import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './modules/pages/clients/clients.component';
import { ClientsAddComponent } from './modules/pages/clients/clients-add/clients-add.component';
import { ProductsComponent } from './modules/pages/products/products.component';
import { ProductsAddComponent } from './modules/pages/products/products-add/products-add.component';
import { SalesComponent } from './modules/pages/sales/sales.component';
import { SalesDetailsComponent } from './modules/pages/sales/sales-details/sales-details.component';
import { LoginComponent } from './modules/authentication/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clients',
    
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ClientsComponent,
      },
      {
        path: 'add',
        component: ClientsAddComponent,
      },
    ]
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ProductsComponent,
      },
      {
        path: 'add',
        component: ProductsAddComponent,
      },
    ]
  },
  {
    path: 'sales',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: SalesComponent,
      },
      {
        path: 'details',
        component: SalesDetailsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
