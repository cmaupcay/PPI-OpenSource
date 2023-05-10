import * as accueil from "./contenu/accueil";
import * as sommaire from "./contenu/sommaire";
import * as texte from "./contenu/texte";

import * as url from "./utils/url";

const ID = "contenu";

const init_vue = async (contenu: HTMLElement) => {
    const vue = url.vue();
    if (!!vue)
    {
        if (vue === texte.ID)
        {
            const args = url.args();
            if (!!args && args.has(texte.SECTION))
            {
                const section = args.get(texte.SECTION)!;
                if (sommaire.SECTIONS.has(section))
                    texte.ouvrir(section, sommaire.SECTIONS.get(section)![0], contenu);
            }
        }
        else contenu.className = vue;
        contenu.scrollIntoView();
    }
};

export const init = async () => {
    const contenu = document.getElementById(ID);
    if (!!contenu)
    {
        accueil.init(contenu);
        sommaire.init(contenu);
        texte.init(contenu).then(() => init_vue(contenu));
    }
};