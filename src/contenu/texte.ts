import * as sommaire from "./sommaire";

import * as url from "../utils/url";

import { marked } from "marked";

export const ID = "texte";

const REQUETE = new XMLHttpRequest();
const REQUETE_METHODE = "GET";
const REQUETE_PRET = 4;

export const SECTION = "section";

const RETOUR_ID = "retour";
const RETOUR_LIMITE = 214;
const RETOUR_CLASSE = "ferme";

var texte: HTMLElement | null | undefined = undefined;

export const ouvrir = async (section: string, md: string, contenu: HTMLElement) => {
    contenu.className = ID;
    url.modifier(ID, { section: section });
    REQUETE.open(REQUETE_METHODE, md);
    REQUETE.send(null);
    REQUETE.onreadystatechange = () => {
        if (REQUETE.readyState === REQUETE_PRET && !!texte)
            texte.innerHTML = marked.parse(REQUETE.responseText);
    };
};

const init_retour = async (contenu: HTMLElement) => {
    const retour = document.getElementById(RETOUR_ID)
    if (!!retour)
    {
        retour.addEventListener("click", () => sommaire.ouvrir(contenu));
        if (!!texte)
            texte.addEventListener("scroll", e => {
                const t = e.target as HTMLElement;
                if (retour.classList.contains(RETOUR_CLASSE))
                {
                    if (t.scrollTop < RETOUR_LIMITE)
                        retour.classList.remove(RETOUR_CLASSE);
                }
                else if (t.scrollTop >= RETOUR_LIMITE)
                        retour.classList.add(RETOUR_CLASSE);
            })
    }
};

export const init = async (contenu: HTMLElement) => {
    texte = document.getElementById(ID);
    init_retour(contenu);
};