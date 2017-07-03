/*
 * Nom du fichier                   : order.ts
 * Description                      : Contient la définition du modèle order
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 19/06/2017
 * Date de dernière modification    : 19/06/2017
 */

export class Order {
    id              : number;
    userId          : number;
    orderStatusId   : number;
    totalAmount     : number;
    transactionId   : number;
    codePromoId     : number;
    cresteDate      : string;
    validationDate  : string;
}
