/*
 * Nom du fichier                   : product-item.service.ts
 * Description                      : Service permettant la récupération d'un produit
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 26/06/2017
 * Date de dernière modification    : 26/06/2017
 */

import { forEach } from '@angular/router/src/utils/collection';
import { MetadataUrls } from 'codelyzer/angular/urlResolvers/abstractResolver';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { CustomHttp } from '../middlewares/custom-http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';

import { Config } from '../config/config';
import { Product } from '../models/product';

@Injectable()
export class ProductItemService {

    // Gets api url from config file
    private api_url: string = Config.API_URL;

    constructor(private http: CustomHttp) { }

      getById(id): Promise<Product> {

        let self = this;

        const promise = new Promise((resolve, reject) => {

            // Parameters definition
            let urlSearchParams = new URLSearchParams();
            urlSearchParams.append('id', id);

            // Request options definition
            let options = new RequestOptions({ search: urlSearchParams });

            // Send query and manage response
            self.http.get(self.api_url + 'product/getById', options).subscribe(
                (response: Response) => {
                    const resp = JSON.parse(response.text());

                    if (resp['success']) {
                        resolve(resp['data']);
                    } else {
                        reject(resp['message']);
                    }
                },
                (error: any) => {
                    reject(error.message);
                    console.log('Erreur dans le serveice product-item');
                }
            );
        });

        return promise;
    }

}
