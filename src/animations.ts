import * as revelation from "./animations/revelation"
import * as scroll from "./animations/scroll"

export const REVELATION = revelation;
export const REVELATION_CLASSE = "revelation";
export const REVELATION_DELAIS = 200;

const init_titre = () => {
    document.querySelectorAll("#ppi ." + REVELATION_CLASSE + ">*").forEach((e: Element, n: number) => {
        setTimeout(revelation.lancer, n * REVELATION_DELAIS, e, () => {
            revelation.appliquer(e);
        });
    })
}

const init_footer = () => {
    const footer = document.querySelector("#ppi>footer");
    const contenu = document.querySelector("#ppi>#contenu");
    if (!!footer && !!contenu)
        scroll.appliquer(footer, contenu);
}

export const init = () => {
    init_titre();
    init_footer();
}