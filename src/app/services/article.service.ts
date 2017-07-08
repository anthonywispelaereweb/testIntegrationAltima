/*
 * Nom du fichier                   : article.service.ts
 * Description                      : Contient le code des services liés aux articles
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 08/07/2017
 * Date de dernière modification    : 08/07/2017
 */
import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Config } from '../config/config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import { Article } from '../models/article';
 
@Injectable()
export class ArticleService {

    articles: Article[];
    public articles_uri: string = Config.ARTICLES_URI;

    constructor(private http: Http) {}

    getArticles() {
        let promise = new Promise((resolve, reject) => {
            let self = this;
            this.articles = [];
            this.http.get(self.articles_uri)
                .map((response: Response) => <Article[]>response.json())
                .catch(() => new Observable())
                .finally(() => reject())
                .subscribe((articles: Article[]) => {
                    this.articles = articles
                    resolve(articles);
                });
        });

        return promise;
    }
}
