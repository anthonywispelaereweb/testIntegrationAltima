/*
 * Nom du fichier                   : auth-guard.service.ts
 * Description                      : Service permettant la vérification de l'authentification lors du changement de page
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 16/06/2017
 */

import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { CanActivate } from '@angular/router';

// Import our authentication service
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // Checks if user is logged in
        return this.auth.isLoggedIn()
            .then(
                result => {
                    if (result === true) {
                        // User authenticated
                        return true;
                    } else {
                        // Not authenticated -> login page
                        this.router.navigate(['/login']);
                        return false;
                    }
                })
            .catch(
                error => {

                    // Adds naviagateTo parameter to login url
                    const navigationExtras: NavigationExtras = {
                        queryParams: {
                            'navigateTo': state.url
                        }
                    };

                    // login failed -> login
                    this.router.navigate(['login'], navigationExtras);
                    return false;
                });
    }
}
