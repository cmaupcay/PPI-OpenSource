import * as sommaire from "./sommaire";

import * as ui from "../utils/ui";

const LOGO_ID = "logo";
const LOGO_URL = "https://opensource.org/";

const PROBLEMATIQUE = "Comment allier mon projet professionnel aux valeurs de l'Open Source ?";
const PROBLEMATIQUE_ID = "problematique";
const PROBLEMATIQUE_DELAIS = 64;

const CONTINUER_ID = "accueil-continuer";

const init_continuer = async (contenu: HTMLElement) => {
    const continuer = document.getElementById(CONTINUER_ID);
    if (!!continuer)
        continuer.addEventListener("click", () => {
            ui.activation(continuer);
            sommaire.ouvrir(contenu);
        });
};

export const init = async (contenu: HTMLElement) => {
    ui.lien(LOGO_ID, LOGO_URL);
    ui.taper(PROBLEMATIQUE_ID, PROBLEMATIQUE, PROBLEMATIQUE_DELAIS);
    init_continuer(contenu);
};