import * as revelation from "./animations/revelation"
import * as scroll from "./animations/scroll"

export const REVELATION = revelation;
export const REVELATION_CLASSE = "revelation";
export const REVELATION_DELAIS = 200;

export const ENTREE_CLASSE = "entree";
export const ENTREE_DELAIS = 500;

export const SCROLL_CLASSE = "scroll";

const init_titre = () => {
    document.querySelectorAll("#ppi ." + REVELATION_CLASSE + ">*").forEach((e: Element, n: number) => {
        setTimeout(revelation.lancer, n * REVELATION_DELAIS, e, () => {
            revelation.appliquer(e);
        });
    })
}

const init_scroll = (contenu: Element) => {
    let limite: scroll.Limite;
    document.querySelectorAll("#ppi ." + SCROLL_CLASSE).forEach((e: Element) => {
        limite = scroll.extraireLimite(e);
        scroll.lancer(e, contenu, limite);
        scroll.appliquer(e, contenu, limite);
    })
}

const init_entree = (contenu: Element) => {
    init_scroll(contenu);
    document.querySelectorAll("#ppi ." + ENTREE_CLASSE).forEach((e: Element) => {
        e.classList.remove(ENTREE_CLASSE);
    });
}

export const init = () => {
    init_titre();
    const contenu = document.querySelector("#ppi>#contenu");
    if (!!contenu)
        setTimeout(init_entree, ENTREE_DELAIS, contenu);
}