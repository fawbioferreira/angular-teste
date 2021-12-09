import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sales } from '../modules/pages/sales/shared/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  //salva o pedido selecionado para ser exibido no component de detalhes
  private selectedSaleSubject: BehaviorSubject<any>;

  constructor() {
    this.selectedSaleSubject = new BehaviorSubject<any>('');
  }

  public get selectedSaleValue(): any {
    return this.selectedSaleSubject.value;
  }

  sendSale(sale: Sales) {
    this.selectedSaleSubject.next(sale);
  }
}
