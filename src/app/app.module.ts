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

// Routes
import { Routes } from './routes/routes';

// Custom components
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { BusinessServiceComponent } from './components/business-service/business-service.component';
import { BannerRelaxComponent } from './components/banner-relax/banner-relax.component';

// Custom services

export function customHttpFct(backend: XHRBackend, options: RequestOptions, router: Router) {
  return new CustomHttp(backend, options, router);
}

@NgModule({
  declarations: [
    // Custom components
    AppComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    MenuComponent,
    BannerComponent,
    BusinessServiceComponent,
    BannerRelaxComponent
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
    // Add providers

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