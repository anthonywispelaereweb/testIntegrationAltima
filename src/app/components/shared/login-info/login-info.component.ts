/*
 * Nom du fichier                   : login-info.component.ts
 * Description                      : Contient le code ts du composant login-info
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 16/06/2017
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Order } from '../../../models/order';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss']
})
export class LoginInfoComponent implements OnInit {

  public isLoggedIn: boolean;
  public user: User = new User();
  public order : Order = new Order();

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {

    let self = this;

    this.user.url = "profiledefault.png";

    this.authService.isLoggedIn()
        .then(
            isLoggedIn => {
                if (isLoggedIn) {
                    // Gets current user
                    let user: Object = this.authService.getStorageUser();
                    this.userService.getUserByEmail(user["email"])
                        .then(
                            result => {
                                if (!result.url) {
                                    result.url = "profiledefault.png";
                                }
                                self.isLoggedIn = true;
                                self.user = result;
                            })
                        .catch(
                            error => {
                                // login failed
                                console.log('Problem getting user');
                            }
                        );
                }
            }
        )
        .catch(
            error => { }
        );
  }

}
