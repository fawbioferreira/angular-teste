import { Component, OnInit } from '@angular/core';
import { SalesDataService } from 'src/app/_helpers/sales-data.service';
import { Client } from '../../clients/shared/client.model';
import { Product } from '../../products/shared/product.model';
import { SalesService } from '../shared/sales.service';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss']
})
export class SalesDetailsComponent implements OnInit {
  
  products: Product[] = [];
  sale:any = {};

  constructor(private salesDataService: SalesDataService, private salesService: SalesService) { }

  ngOnInit(){
    this.getSelectedSale();
    this.getProducts();
  }

  getSelectedSale(){
    this.sale = this.salesDataService.selectedSaleValue;
  }

  getProducts(){
    //busca pelo id da collection
    let products = JSON.parse(this.sale.products);  
    products.forEach((product:Product) => {
      this.salesService.getOneById(product.id).then(
        (data:any) => {
          this.products.push(data)
        }
      );
    });  
  }

  /**
   * Foi colocado "na mão" os produtos nos objetos de venda por não estar conseguindo fazer relacionamento no firebase
   * atenção a um detalhe: o atributo ID do produto, que é utilizado para buscar o mesmo no banco, também foi inserido
   * "na mão" apenas no objeto que está dentro do objeto Sale.
   */
  

}
