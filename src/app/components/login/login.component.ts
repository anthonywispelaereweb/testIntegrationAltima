/*
 * Nom du fichier                   : login.component.ts
 * Description                      : Contient le code ts du composant login
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 16/06/2017
 */

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    moduleId: module.id
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    navigateTo: string;

    constructor(
        private router: Router,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        // reset login status
        this.authService.logout().then((data: any) => {}, (error: any) => {});

        // Gets URL parameters
        this.activatedRoute.queryParams.subscribe(params => {
            this.navigateTo = params['navigateTo'];
        });
    }

    login() {
        const self = this;

        self.loading = true;
        self.authService.login(this.model.email, this.model.password).then(
            result => {
                if (result === true) {
                    // login successful
                    if (!!this.navigateTo) {
                        self.router.navigate([this.navigateTo]);
                    } else {
                        self.location.back();
                    }
                } else {
                    // login failed
                    self.error = 'Email or password is incorrect';
                    self.loading = false;
                }
            },
            error => {
                // login failed
                self.error = 'Email or password is incorrect';
                self.loading = false;
            }
        );
    }
}
