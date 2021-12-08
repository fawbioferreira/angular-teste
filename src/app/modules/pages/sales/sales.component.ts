import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesDataService } from 'src/app/_helpers/sales-data.service';
import { Sales } from './shared/sales.model';
import { SalesService } from './shared/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  sales: Sales[] = []

  constructor(private salesService: SalesService, private salesDataService: SalesDataService, private router: Router) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales(){
    this.salesService.getAll().then((res:any) => {
      this.sales = res.map((e:any) => {
        return {
          ...e.payload.doc.data() as {}
        } as Sales;
      });
    });
  }

  sendSale(sale:Sales){
    this.salesDataService.sendSale(sale);
    this.router.navigateByUrl('/sales/details');
  }

}
