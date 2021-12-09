import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './modules/pages/clients/clients.component';
import { ClientsAddComponent } from './modules/pages/clients/clients-add/clients-add.component';
import { ProductsComponent } from './modules/pages/products/products.component';
import { ProductsAddComponent } from './modules/pages/products/products-add/products-add.component';
import { SalesComponent } from './modules/pages/sales/sales.component';
import { SalesDetailsComponent } from './modules/pages/sales/sales-details/sales-details.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { AuthGuard } from './modules/authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clients',
    canActivate: [AuthGuard],    
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ClientsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add',
        component: ClientsAddComponent,
        canActivate: [AuthGuard]
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
        canActivate: [AuthGuard]
      },
      {
        path: 'add',
        component: ProductsAddComponent,
        canActivate: [AuthGuard]
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
        canActivate: [AuthGuard]
      },
      {
        path: 'details',
        component: SalesDetailsComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
