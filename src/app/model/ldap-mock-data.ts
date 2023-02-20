import { UserLdap } from "./user-ldap";

export const LDAP_USERS: UserLdap[] = [
    {
        id: 1,
        login: "admin",
        nom: "admin",
        prenom: "admin",
        nomComplet: "admin",
        motDePasse: null,
        mail: "admin@epsi.fr",
        role: "admin",
        employeNumero: 1,
        employeNiveau: 1,
        dateEmbauche: "2017-01-01",
        publisherId: 1,
        active: true
    },
    {
        id: 2,
        login: "user",
        nom: "user",
        prenom: "user",
        nomComplet: "user",
        motDePasse: null,
        mail: "user@epsi.fr",
        role: "user",
        employeNumero: 2,
        employeNiveau: 2,
        dateEmbauche: "2017-01-01",
        publisherId: 2,
        active: true
    }
];
