/*
 * Nom du fichier                   : products-item.component.ts
 * Description                      : Contient le code ts de la page d'un product
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 24/06/2017
 * Date de dernière modification    : 26/06/2017
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItemService } from '../../services/product-item.service';

import { Product } from '../../models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

    sub: any;
    id: number;

    public product = new Product();

    constructor(private route: ActivatedRoute, private ProductItemService: ProductItemService) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            
            let self = this;

            this.ProductItemService.getById(self.id).then(
            result => {
                this.product = result;
            })
            .catch(
                error => {
                    console.log('Problem getting adBanner');
                }
            );
        });
    }

}
