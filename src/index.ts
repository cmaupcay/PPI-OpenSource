import * as animations from "./animations";

import "./style.scss"

export const DELAIS_TITRE = 200;

document.querySelectorAll("#ppi>header>#titre>*").forEach((e: Element, n: number) => {
    setTimeout(animations.revelation.lancer, n * DELAIS_TITRE, e, () => {
        animations.revelation.appliquer(e);
    });
})