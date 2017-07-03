/*
 * Nom du fichier                   : auth.service.ts
 * Description                      : Service permettant la gestion de l'authentification des utilisateurs
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 16/06/2017
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as CryptoJS from 'crypto-js';

import { Config } from '../config/config';

@Injectable()
export class AuthService {
    public token: string;
    public api_url: string = Config.API_URL;

    constructor(private http: Http) { }

    login(email: string, password: string): Promise<boolean> {

        const self = this;

        const promise = new Promise((resolve, reject) => {

            // Encrypt password thanks to SHA1 algorithm
            const encryptedPassword: String = CryptoJS.SHA1(password).toString();

            // Send request to get token
            self.http.post(self.api_url + 'user/authenticate', { email: email, password: encryptedPassword }).subscribe(
                (response: Response) => {

                    // login successful if there's a jwt token in the response
                    const token = response.json() && response.json().data && response.json().data.token;

                    if (token) {
                        // set token property
                        self.token = token;

                        // store email and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                        // return true to indicate successful login
                        resolve(true);
                    } else {
                        // return false to indicate failed login
                        reject(false);
                    }
                },
                (error: any) => {
                    reject(error);
                });
        });

        return promise;
    }

    logout(): Promise<boolean> {

        const self = this;
        let email = '';

        const promise = new Promise((resolve, reject) => {

            try {
                // Gets current user from local storage
                const storageUser = self.getStorageUser();

                if (storageUser) {
                    // Clear token remove user from local storage to log user out
                    localStorage.removeItem('currentUser');

                    email = storageUser['email'];

                    // Send request to logout
                    self.http.post(self.api_url + 'user/logout', { email: email }).subscribe(
                            (response: Response) => {
                                const success: boolean = response.json() && response.json().success;
                                resolve(success);
                            },
                            (error: any) => {
                                reject(error.message);
                            }
                        );
                } else {
                    reject('No storage user');
                }
            } catch (ex) {
                // clear token remove user from local storage to log user out
                localStorage.removeItem('currentUser');
                reject('An error occured cleaning local storage');
            }
        });

        return promise;
    }

    isLoggedIn(): Promise<boolean> {

        const self = this;

        const promise = new Promise((resolve, reject) => {
            try {
                // Gets current storage user
                const storageUser = self.getStorageUser();

                if (!!storageUser && storageUser.hasOwnProperty('token') && !!storageUser['token']) {

                    // Headers definition
                    const headers = new Headers();
                    headers.append('x-access-token', storageUser['token']);

                    // Request options definition
                    const options = new RequestOptions({ headers: headers });

                    // Send request to check if user is well logged in
                    self.http.post(self.api_url + 'user/checkLoggedIn', {}, options).subscribe(
                            (response: Response) => {
                                const success: boolean = response.json() && response.json().success;
                                resolve(success);
                            },
                            (error) => {
                                reject(error.message);
                            }
                        );
                } else {
                    reject(false);
                }
            } catch (ex) {
                reject('No Storage user');
            }
        });

        return promise;
    }

    getStorageUser(): Object {

        // Gets user from local storage
        const currentUser = localStorage.getItem('currentUser');
        let currentUserObj = null;

        if (!!currentUser) {
            // Parse user to json object
            currentUserObj = JSON.parse(currentUser.toString());

            if (!currentUserObj.hasOwnProperty('token') || !currentUserObj.hasOwnProperty('email')) {
                // In case of object not valid, return null
                currentUserObj = null;
            };
        }

        return currentUserObj;
    }
}