import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../shared/product.model';
import { ProductsService } from '../shared/products.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    'cod': new FormControl({value: '', disabled: false}, [Validators.required]),
    'name': new FormControl({value: '', disabled: false}, [Validators.required]),
    'value': new FormControl({value: 0, disabled: false}, [Validators.required]),    
  });

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  async submitForm(){
    if(this.productForm.invalid){

      Swal.fire({
        title: 'Erro!',
        text: 'Preencha todos os campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })

      return;

    } else{
      let product = new Product(
        this.productForm.controls['cod'].value,
        this.productForm.controls['name'].value,
        this.productForm.controls['value'].value        
      );

      await this.productsService.create(product);

      Swal.fire({
        title: 'Sucesso!',
        text: 'Produto cadastrado',
        icon: 'success',
        confirmButtonText: 'Ok'
      })

      this.router.navigateByUrl('/products');
    }
  }

}
