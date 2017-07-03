/*
 * Nom du fichier                   : app.module.ts
 * Description                      : Fichier de déclaration des composants angular2
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 26/06/2017
 */

// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

import { CustomHttp } from './middlewares/custom-http';

// Bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

// Routes
import { Routes } from './routes/routes';

// Custom components
import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginInfoComponent } from './components/shared/login-info/login-info.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BasketComponent } from './components/shared/basket/basket.component';
import { AdvertisementBannerComponent } from './components/shared/advertisement-banner/advertisement-banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

// Custom services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AdvertisementBannerService } from './services/advertisement-banner.service';
import { ProductsService } from './services/products.service';
import { ProductItemService } from './services/product-item.service';
import { UserProfileService } from './services/user-profile.service';
import { ContactComponent } from './components/contact/contact.component';
import { SigningUpComponent } from './components/signing-up/signing-up.component';


export function customHttpFct(backend: XHRBackend, options: RequestOptions, router: Router) {
  return new CustomHttp(backend, options, router);
}

@NgModule({
  declarations: [
    // Custom components
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    LoginInfoComponent,
    LogoutComponent,
    UserProfileComponent,
    NotFoundComponent,
    BasketComponent,
    MenuComponent,
    CarouselComponent,
    AdvertisementBannerComponent,
    ProductsComponent,
    ProductItemComponent,
    ContactComponent,
    SigningUpComponent
  ],
  imports: [
    // Core modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    // Dependencies modules
    NgbModule.forRoot(),

    // Routes
    RouterModule.forRoot(Routes)
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    AdvertisementBannerService,
    ProductsService,
    ProductItemService,
    UserProfileService,

    // Http middleware
    {
      provide: CustomHttp,
      useFactory: customHttpFct,
      deps: [XHRBackend, RequestOptions, Router]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }