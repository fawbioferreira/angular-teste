import { Component, OnInit } from '@angular/core';
import { SalesDataService } from 'src/app/_helpers/sales-data.service';
import { Client } from '../../clients/shared/client.model';
import { Product } from '../../products/shared/product.model';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss']
})
export class SalesDetailsComponent implements OnInit {
  products: Product[] = [
    {value: 10, cod: 1, name: 'Produto 1'},
    {name: 'Produto 2', value: 20, cod: 2}
  ];
  sale:any = {};

  constructor(private salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this.getSelectedSale();
  }

  getSelectedSale(){
    this.sale = this.salesDataService.selectedSaleValue;
  }
  

}
