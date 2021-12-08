import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './core/components/sidemenu/sidemenu.component';
import { ClientsComponent } from './modules/pages/clients/clients.component';
import { ProductsComponent } from './modules/pages/products/products.component';
import { SalesComponent } from './modules/pages/sales/sales.component';
import { ClientsAddComponent } from './modules/pages/clients/clients-add/clients-add.component';
import { ProductsAddComponent } from './modules/pages/products/products-add/products-add.component';
import { SalesDetailsComponent } from './modules/pages/sales/sales-details/sales-details.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    ClientsComponent,
    ProductsComponent,
    SalesComponent,
    ClientsAddComponent,
    ProductsAddComponent,
    SalesDetailsComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
