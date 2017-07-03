/*
 * Nom du fichier                   : custom-http.ts
 * Description                      : Middleware HTTP permettant de gérer de manière centralisée les erreurs 403
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 03/07/2017
 * Date de dernière modification    : 03/07/2017
 */

import { Http, RequestOptions, ConnectionBackend, RequestOptionsArgs, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomHttp extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router) {
        // Call mother class constructor
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {

        // Call get method from mother class
        return super.get(url, options).catch(res => {

            // Manage 403 http code in case of error encountered
            if (res.status === 403) {
                // Adds url parameter navigateTo for login redirect
                const navigationExtras: NavigationExtras = {
                    queryParams: {
                        'navigateTo': this.router.url
                    }
                };

                // Redirect to login page
                this.router.navigate(['login'], navigationExtras);
            }

            return Observable.throw(res);
        });
    }
}
