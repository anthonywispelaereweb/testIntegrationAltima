/*
 * Nom du fichier                   : logout.component.ts
 * Description                      : Contient le code ts du composant logout
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 16/06/2017
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .then(
        result => {
            this.router.navigate(['/home']);
        })
      .catch(
        error => {
            this.router.navigate(['/home']);
        }
    );
  }
}
