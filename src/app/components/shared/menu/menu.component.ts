/*
 * Nom du fichier                   : menu.component.ts
 * Description                      : Contient le code ts du composant menu
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 03/07/2017
 * Date de dernière modification    : 03/07/2017
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public searchForm = this.fb.group({
        searchText: ["", Validators.required]
    });
    public searchVisible = false;

    constructor(public fb: FormBuilder) { }

    ngOnInit() {

    }

    search(event) {
        event.stopPropagation();
        if (!this.searchForm.value.searchText) {
            this.searchVisible = !this.searchVisible;
        } else {
            console.log('search');
        }
    }

}
