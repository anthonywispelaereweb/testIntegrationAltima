/*
 * Nom du fichier                   : blog.component.ts
 * Description                      : Contient le code de la page blog
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 06/07/2017
 * Date de dernière modification    : 07/07/2017
 */

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Config } from '../../config/config';
import { Observable } from 'rxjs/Observable';
import { ArticleService }from '../../services/article.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import { Article } from '../../models/article';
 


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
    articles: Article[];
    public articles_uri: string = Config.ARTICLES_URI;

    constructor(private http: Http, private ArticleService: ArticleService) {}


    ngOnInit() {
        let self = this;
        self.ArticleService.getArticles().then(
          (data: Article[]) => {
              this.articles = data;
              
          },
          (error) => {
              console.log('error: ');
          });
    }

}
