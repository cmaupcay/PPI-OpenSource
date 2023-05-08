const SELECTEUR = "#titre>*";

const AUDIOS = new Map<string, string>([
    ["projet", require("../audios/projet.mp3")],
    ["professionnel", require("../audios/professionnel.mp3")],
    ["individualise", require("../audios/individualise.mp3")]
]);

export const init = () => {
    document.querySelectorAll(SELECTEUR).forEach((e: Element) => {
        e.addEventListener("click", () => (new Audio(AUDIOS.get(e.id)).play()));
    });
};