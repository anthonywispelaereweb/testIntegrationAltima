/*
 * Nom du fichier                   : advertisement-banner.component.ts
 * Description                      : Contient le code ts du composant advertisement-banner
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 21/06/2017
 * Date de dernière modification    : 21/06/2017
 */

import { Component, OnInit } from '@angular/core';
import { AdvertisementBannerService } from '../../../services/advertisement-banner.service';
import { AdvertisementBanner } from '../../../models/advertisementBanner';

@Component({
    selector: 'app-advertisement-banner',
    templateUrl: './advertisement-banner.component.html',
    styleUrls: ['./advertisement-banner.component.scss']
})

export class AdvertisementBannerComponent implements OnInit {

    public title:string = "";
    public description:string = "";
    public uri:string = "";
    public adBanner = new AdvertisementBanner();

    constructor(private AdvertisementBannerService: AdvertisementBannerService) { }

    ngOnInit() {

        let self = this;

        this.AdvertisementBannerService.getLast().then(
          result => {
              this.adBanner = result;
              this.title = result.label;
              this.description = result.description;
              this.uri = result.url;
              
          })
        .catch(
            error => {
                console.log('Problem getting adBanner');
            }
        );
    }

}
