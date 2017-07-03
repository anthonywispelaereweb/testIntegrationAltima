/*
 * Nom du fichier                   : user-profile.component.ts
 * Description                      : Contient le code ts du composant user-profile
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 26/06/2017
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from '../../services/user-profile.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

    public sub: any;
    public id = null
    public user = new User();

    constructor(private route: ActivatedRoute, private UserProfileService: UserProfileService) { }

    ngOnInit() { 
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            
            let self = this;

            this.UserProfileService.getById(self.id).then(
            result => {
                this.user = result;
                if (!this.user.url) {
                    
                    result.url = "profiledefault.png";
                }
            })
            .catch(
                error => {
                    console.log('Problem getting this user');
                }
            );
        });
    }
}
