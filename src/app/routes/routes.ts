/*
 * Nom du fichier                   : routes.ts
 * Description                      : Contient les routes du site web
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 03/07/2017
 * Date de dernière modification    : 08/07/2017
 */

import { RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { BlogComponent } from '../components/blog/blog.component';
import { ArticleItemComponent } from '../components/article-item/article-item.component';
import { AboutComponent } from '../components/about/about.component';


export const Routes = [
    { path: ''                  , redirectTo: '/home'               , pathMatch: 'full' } ,
    { path: 'home'              , component: HomeComponent          , name: 'Home'              , useAsDefault: true  },
    { path: 'blog'              , component: BlogComponent          , name: 'Blog'              , useAsDefault: false },
    { path: 'article/:id'       , component: ArticleItemComponent   , name: 'Article'           , useAsDefault: false },
    { path: 'about'             , component: AboutComponent         , name: 'About'             , useAsDefault: false },
    { path: '**'                , component: NotFoundComponent      , name: 'PageNotFound'      , useAsDefault: false }
    
];
