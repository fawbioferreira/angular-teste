import { LOCALE_ID, NgModule } from '@angular/core';
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

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ClientsService } from './modules/pages/clients/shared/clients.service';
import { HttpClientModule } from '@angular/common/http';
import { CnpjOuCpfPipe } from './_helpers/cnpjOuCpf.pipe';
import { CepPipe } from './_helpers/cep.pipe';
import { CurrencyMaskConfig, CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

const maskConfig: Partial<IConfig> = {
  validation: false,
};

const customCurrencyMaskConfig : CurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: 0,
  max: 9999999999999999,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

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
    HeaderComponent,
    CnpjOuCpfPipe,
    CepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  providers: [
    ClientsService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
