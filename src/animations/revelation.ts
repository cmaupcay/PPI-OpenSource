export const DELAIS_ECRITURE = 100;
export const DELAIS_FERMETURE = 1000;

const extraireSpan = (e: Element): Element | null => {
    return e.querySelector("span");
}

const extraireNom = (e: Element): string | undefined => {
    return e.getAttribute("name")?.substring(1);
}

const ouvrir = (span: Element, nom: string) => {
    if (span.innerHTML.length == 0)
    {
        let compteur = 0;
        const interval = setInterval(() => {
            span.innerHTML += nom[compteur++];
            if (compteur == nom.length)
            {
                clearInterval(interval);
                setTimeout(fermer, DELAIS_FERMETURE, span, nom.length - 1);
            }
        }, DELAIS_ECRITURE);
    }
}

const fermer = (span: Element, n: number) => {
    const interval = setInterval(() => {
        span.innerHTML = span.innerHTML.substring(0, n);
        n--;
        if (n == -1)
            clearInterval(interval);
    }, DELAIS_ECRITURE);
}

export const lancer = (e: Element): boolean => {
    const span = extraireSpan(e);
    const nom = extraireNom(e);
    if (!!span && !!nom)
    {
        ouvrir(span, nom);
        return true;
    }
    return false;
}

export const appliquer = (e: Element): boolean => {
    const span = extraireSpan(e);
    const nom = extraireNom(e);
    if (!!span && !!nom)
    {
        e.addEventListener("mouseover", (evt: Event) => {
            evt.preventDefault();
            ouvrir(span, nom);
        });
        return true;
    }
    return false;
}
