/*
 * Nom du fichier                   : article-item.component.ts
 * Description                      : Contient le code de la page d'un article
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 07/07/2017
 * Date de dernière modification    : 08/07/2017
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService }from '../../services/article.service';
import { Http, Response } from '@angular/http';
import { Config } from '../../config/config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import { Article } from '../../models/article';

@Component({
    selector: 'app-article-item',
    templateUrl: './article-item.component.html',
    styleUrls: ['./article-item.component.scss']
})

export class ArticleItemComponent implements OnInit {
    sub: any;
    id: number;
    articles: Article[];
    public articles_uri: string = Config.ARTICLES_URI;

    public article = new Article();

    constructor(private route: ActivatedRoute, private http: Http, private ArticleService: ArticleService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        let self = this;
        self.ArticleService.getArticles().then(
            (data: Article[]) => {
                data.forEach(element => {
                    if (this.id === element.id) {
                        this.article = element;
                    } 
                });
            },
            (error) => {
                console.log('error: ');
            }
        );
    }

}
