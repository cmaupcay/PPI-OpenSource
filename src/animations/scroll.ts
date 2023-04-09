export const CLASSE = "scroll-limite";
export const DECALAGE = .44;

export const LIMITE = "scroll-limite";

export type Limite = number | undefined;

export const estVisible = (cible: Element): boolean => {
    const rect = cible.getBoundingClientRect();
    return rect.top + rect.height * DECALAGE  >= 0
        && rect.top + rect.height * (1 - DECALAGE) <= window.innerHeight;
}

export const extraireLimite = (cible: Element): Limite => {
    const limiteStr = cible.getAttribute(LIMITE);
    if (limiteStr)
    {
        let limite = Number.parseInt(limiteStr);
        if (limite < 0)
            limite += window.innerHeight;
        return limite;
    }
    return undefined;
}

export const lancer = (cible: Element, source: Element, limite: Limite): boolean => {
    let r = false;
    if ((limite && source.scrollTop > limite)
    || (!limite && !estVisible(cible)))
    {
        cible.classList.add(CLASSE);
        r = true;
    }
    else if (cible.classList.contains(CLASSE)
         && ((limite && source.scrollTop <= limite)
         || (!limite && estVisible(cible))))
        {
            cible.classList.remove(CLASSE);
            r = true;
        }
    return r;
}

export const appliquer = (cible: Element, source: Element, limite: Limite): boolean => {
    source.addEventListener("scroll", (e: Event) => {
        e.preventDefault();
        lancer(cible, source, limite);
    });
    return true;
}
