import * as revelation from "./animations/revelation"

export const REVELATION = revelation;
export const REVELATION_CLASSE = "revelation";
export const REVELATION_DELAIS = 200;

export const init = () => {
    document.querySelectorAll("#ppi ." + REVELATION_CLASSE + ">*").forEach((e: Element, n: number) => {
        setTimeout(revelation.lancer, n * REVELATION_DELAIS, e, () => {
            revelation.appliquer(e);
        });
    })
}