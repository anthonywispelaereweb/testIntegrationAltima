/*
 * Nom du fichier                   : user.ts
 * Description                      : Contient la définition du modèle user
 * Auteur(s)                        : Anthony Wispelaere
 * Date de création                 : 16/06/2017
 * Date de dernière modification    : 26/06/2017
 */

export class User {
    id                  : number;
    lastname            : string;
    firstname           : string;
    civilityId          : number;
    address             : string;
    postCode            : string;
    city                : string;
    country             : string;
    email               : string;
    password            : string;
    birthdate           : string;
    profilPictureId     : number;
    phonenumber         : string;
    lastLogoutDate      : string;
    userStatusIs        : number;
    userRoleId          : number;
    registerdate        : string;
    url                 : string;
}
