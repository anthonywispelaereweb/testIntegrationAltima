/*
 * Nom du fichier                   : products.ts
 * Description                      : Contient la définition du modèle product
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 23/06/2017
 * Date de dernière modification    : 23/06/2017
 */

export class Product {
    id              : number;
    label           : string;
    description     : string;
    quantite        : number;
    productTypeId   : number;
    productImgId    : number;
    price           : number;
    dimension       : string;
    ref             : string;
    productStatusId : string;
    url             : string;
}
