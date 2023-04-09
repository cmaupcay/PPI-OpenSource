const init_ascenceur = () => {
    const contenu = document.querySelector("#ppi>#contenu");
    if (!!contenu)
        document.querySelector("#ppi>#nav>#ascenceur")?.addEventListener("click", () => {
            contenu?.scrollTo(0, 0);
        });
};

export const init = () => {
    init_ascenceur();
};