import * as animations from "./animations";

export const DELAIS_TITRE = 200;

document.querySelectorAll("#ppi>header>#titre>*").forEach((e: Element, n: number) => {
    animations.revelation.appliquer(e);
    setTimeout(animations.revelation.lancer, n * DELAIS_TITRE, e);
})