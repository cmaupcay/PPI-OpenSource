export const DELAIS_ECRITURE = 74;
export const DELAIS_FERMETURE = 1000;

export const CLASSE_OUVERT = "ouvert";

const ouverts: Set<string> = new Set();

const extraireSpan = (e: Element): Element | null => {
    return e.querySelector("span");
}

const extraireNom = (e: Element): string | null => {
    return e.getAttribute("name");
}

const ouvrir = (span: Element, nom: string, callback: Function | undefined = undefined) => {
    if (!ouverts.has(nom) && span.innerHTML.length == 0)
    {
        ouverts.add(nom);
        span.parentElement?.classList.add(CLASSE_OUVERT);
        let compteur = 0;
        const interval = setInterval(() => {
            span.innerHTML += nom[compteur++];
            if (compteur == nom.length)
            {
                clearInterval(interval);
                setTimeout(fermer, DELAIS_FERMETURE, span, nom, callback);
            }
        }, DELAIS_ECRITURE);
    }
}

const fermer = (span: Element, nom: string, callback: Function | undefined = undefined) => {
    if (ouverts.has(nom) && span.innerHTML.length > 0)
    {
        let n = nom.length - 1;
        const interval = setInterval(() => {
            span.innerHTML = span.innerHTML.substring(0, n);
            n--;
            if (n == 2)
                span.parentElement?.classList.remove(CLASSE_OUVERT);
            if (n == -1)
            {
                clearInterval(interval);
                ouverts.delete(nom);
                if (!!callback) callback();
            }
        }, DELAIS_ECRITURE);
    }
}

export const lancer = (e: Element, callback: Function | undefined = undefined): boolean => {
    const span = extraireSpan(e);
    const nom = extraireNom(e);
    if (!!span && !!nom)
    {
        ouvrir(span, nom, callback);
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
