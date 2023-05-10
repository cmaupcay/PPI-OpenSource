import * as texte from "./texte";

import * as url from "../utils/url";

const ID = "sommaire";

export const SECTIONS = new Map<string, [string, string]>([
    ["Introduction", [require("../textes/introduction.md"), "fa-solid fa-info"]],
    ["Utiliser", [require("../textes/utiliser.md"), "fa-solid fa-user"]],
    ["Contribuer", [require("../textes/contribuer.md"), "fa-solid fa-code"]],
    ["Entreprendre", [require("../textes/entreprendre.md"), "fa-solid fa-briefcase"]],
    ["Conclusion", [require("../textes/conclusion.md"), "fa-solid fa-forward"]]
]);

const LISTE_ID = "sommaire-liste";

const SECTION_TAG = "li";

export const ouvrir = async (contenu: HTMLElement) => {
    contenu.className = ID;
    url.modifier(ID);
};

const init_section = async (contenu: HTMLElement, sommaire: HTMLElement, nom: string, vals: [string, string]) => {
    const section = document.createElement(SECTION_TAG);
    section.id = nom.replace(' ', '-').toLowerCase();
    section.innerHTML = "<i class=\"" + vals[1] + "\"></i>" + nom;
    section.addEventListener("click", () => texte.ouvrir(nom, vals[0], contenu));
    sommaire.appendChild(section);
};

export const init = async (contenu: HTMLElement) => {
    const sommaire = document.getElementById(LISTE_ID);
    if (!!sommaire)
        SECTIONS.forEach((vals, nom) => init_section(contenu, sommaire, nom, vals));
};