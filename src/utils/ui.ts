const LIEN_DELAIS = 1000;

export type Élément = Element | null;

export const alterner = (e: Élément, classe: string) => {
    if (!!e)
    {
        if (e.classList.contains(classe))
             e.classList.remove(classe);
        else e.classList.add(classe);
    }
};

export const activation = async (e: Élément) => alterner(e, "actif");

export const lien = async (id: string, url: string) => {
    const lien = document.getElementById(id);
    lien?.setAttribute("href", url);
    lien?.addEventListener("click", () => {
        activation(lien);
        window.open(url);
        setTimeout(() => activation(lien), LIEN_DELAIS);
    });
};

const _taper = (e: Element, texte: string, delais: number, i: number) => {
    e.innerHTML += texte.charAt(i++);
    if (i < texte.length)
        setTimeout(
            () => _taper(e, texte, delais, i),
            delais * Math.random() + delais / 2
        );
};

export const taper = async (id: string, texte: string, delais: number) => {
    const e = document.getElementById(id);
    if (!!e)
    {
        e.innerHTML = "";
        _taper(e, texte, delais, 0);
    }
};