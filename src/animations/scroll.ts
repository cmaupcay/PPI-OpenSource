export const LIMITE_SCROLL = 72;

export const CLASSE_FERME = "ferme";

export const appliquer = (cible: Element, source: Element): boolean => {
    source.addEventListener("scroll", (e: Event) => {
        e.preventDefault();
        if (cible.classList.contains(CLASSE_FERME))
        {
            if (source.scrollTop <= LIMITE_SCROLL)
                cible.classList.remove(CLASSE_FERME);
        }
        else if (source.scrollTop > LIMITE_SCROLL)  
            cible.classList.add(CLASSE_FERME);
    });
    return true;
}
