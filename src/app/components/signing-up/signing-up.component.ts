/*
 * Nom du fichier                   : siging-up.component.ts
 * Description                      : Contient le code ts de la oage d'inscription
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 16/06/2017
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signing-up',
  templateUrl: './signing-up.component.html',
  styleUrls: ['./signing-up.component.scss']
})
export class SigningUpComponent implements OnInit {

  public signupForm = new FormGroup({
    lastName  : new FormControl('', Validators.compose([Validators.required, Validators.email,Validators.minLength(5), Validators.maxLength(10)])),
    firstName : new FormControl('', Validators.required),
    email     : new FormControl('', Validators.compose([Validators.required, Validators.email,Validators.minLength(5), Validators.maxLength(10)])),
    mdp       : new FormControl('', Validators.required)
  });

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  signup(event) {
    console.log('event: ', event);
    console.log('form: ', this.signupForm.value);
  }

}
