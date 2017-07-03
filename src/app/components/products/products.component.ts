/*
 * Nom du fichier                   : products.component.ts
 * Description                      : Contient le code ts de la page products
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 23/06/2017
 * Date de dernière modification    : 26/06/2017
 */

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    
    public label: string = "";
    public uri : string = "";
    public description: string = "";
    public price: number = null;
    public product = new Product();
    public productsArray = null;


    constructor(private ProductsService: ProductsService) { }

    ngOnInit() {

        let self = this;

        this.ProductsService.getAll().then(
          result => {
              this.productsArray = result;
          })
        .catch(
            error => {
                console.log('Problem getting products');
            }
        );
    }

}
