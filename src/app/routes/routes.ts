/*
 * Nom du fichier                   : routes.ts
 * Description                      : Contient les routes du site web
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 23/06/2017
 */

import { RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { BasketComponent } from '../components/shared/basket/basket.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductItemComponent } from '../components/product-item/product-item.component';
import { ContactComponent } from '../components/contact/contact.component';
import { SigningUpComponent } from '../components/signing-up/signing-up.component';

import { AuthGuard } from '../services/auth-guard.service';

export const Routes = [
    { path: ''                  , redirectTo: '/home'               , pathMatch: 'full' } ,
    { path: 'home'              , component: HomeComponent          , name: 'Home'              , useAsDefault: true  },
    { path: 'products'          , component: ProductsComponent      , name: 'Products'          , useAsDefault: false },
    { path: 'login'             , component: LoginComponent         , name: 'Login'             , useAsDefault: false },
    { path: 'login/:navigateTo' , component: LoginComponent         , name: 'Login'             , useAsDefault: false },
    { path: 'logout'            , component: LogoutComponent        , name: 'Logout'            , useAsDefault: false },
    { path: 'basket'            , component: BasketComponent        , name: 'Basket'            , useAsDefault: false },
    { path: 'userprofile/:id'   , component: UserProfileComponent   , name: 'UserProfile'       , useAsDefault: false, canActivate: [AuthGuard] },
    { path: 'product-item/:id'  , component: ProductItemComponent   , name: 'ProductItem'       , useAsDefault: false },
    { path: 'contact'           , component: ContactComponent       , name: 'Contact'           , useAsDefault: false },
    { path: 'signingUp'         , component: SigningUpComponent     , name: 'SigninigUp'        , useAsDefault: false },
    { path: '**'                , component: NotFoundComponent      , name: 'PageNotFound'      , useAsDefault: false }
    
];
