/*
 * Nom du fichier                   : routes.ts
 * Description                      : Contient les routes du site web
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 03/07/2017
 * Date de dernière modification    : 03/07/2017
 */

import { RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';


export const Routes = [
    { path: ''                  , redirectTo: '/home'               , pathMatch: 'full' } ,
    { path: 'home'              , component: HomeComponent          , name: 'Home'              , useAsDefault: true  },
    { path: '**'                , component: NotFoundComponent      , name: 'PageNotFound'      , useAsDefault: false }
    
];
