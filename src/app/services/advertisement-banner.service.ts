/*
 * Nom du fichier                   : advertisement-banner.service.ts
 * Description                      : Service permettant la manipulation des données des bannieres de publicité
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 21/06/2017
 * Date de dernière modification    : 21/06/2017
 */

import { forEach } from '@angular/router/src/utils/collection';
import { MetadataUrls } from 'codelyzer/angular/urlResolvers/abstractResolver';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { CustomHttp } from '../middlewares/custom-http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Config } from '../config/config';
import { AdvertisementBanner } from '../models/advertisementBanner';

@Injectable()
export class AdvertisementBannerService {

    // Gets api url from config file
    private api_url: string = Config.API_URL;

    constructor(private http: CustomHttp) { }

      getLast(): Promise<AdvertisementBanner> {

        let self = this;

        const promise = new Promise((resolve, reject) => {

            // Send query and manage response
            self.http.get(self.api_url + 'advertisementBanner/getLast').subscribe(
                (response: Response) => {
                    const resp = JSON.parse(response.text());

                    if (resp['success']) {
                        resolve(resp['data'][0]);
                    } else {
                        reject(resp['message']);
                    }
                },
                (error: any) => {
                    reject(error.message);
                    console.log('Erreur dans le serveice advertisement banner');
                }
            );
        });

        return promise;
    }
}
