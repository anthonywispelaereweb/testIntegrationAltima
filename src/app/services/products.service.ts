/*
 * Nom du fichier                   : products.service.ts
 * Description                      : Service permettant la manipulation des données des produits
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 23/06/2017
 * Date de dernière modification    : 23/06/2017
 */

import { forEach } from '@angular/router/src/utils/collection';
import { MetadataUrls } from 'codelyzer/angular/urlResolvers/abstractResolver';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { CustomHttp } from '../middlewares/custom-http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Config } from '../config/config';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

    // Gets api url from config file
    private api_url: string = Config.API_URL;

    constructor(private http: CustomHttp) { }

      getAll(): Promise<Product> {

        let self = this;

        const promise = new Promise((resolve, reject) => {

            // Send query and manage response
            self.http.get(self.api_url + 'product/getAll').subscribe(
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
                    console.log('Erreur dans le serveice product');
                }
            );
        });

        return promise;
    }
}