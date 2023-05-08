import * as texte from "./texte";

import * as url from "../utils/url";

const ID = "sommaire";

export const SECTIONS = new Map<string, string>([
    ["test", require("../textes/test.md")]
]);

const LISTE_ID = "sommaire-liste";

const SECTION_TAG = "li";

export const ouvrir = async (contenu: HTMLElement) => {
    contenu.className = ID;
    url.modifier(ID);
};

const init_section = async (contenu: HTMLElement, sommaire: HTMLElement, nom: string, md: string) => {
    const section = document.createElement(SECTION_TAG);
    section.id = nom.replace(' ', '-').toLowerCase();
    section.innerHTML = nom;
    section.addEventListener("click", () => texte.ouvrir(nom, md, contenu));
    sommaire.appendChild(section);
};

export const init = async (contenu: HTMLElement) => {
    const sommaire = document.getElementById(LISTE_ID);
    if (!!sommaire)
        SECTIONS.forEach((md, nom) => init_section(contenu, sommaire, nom, md));
};