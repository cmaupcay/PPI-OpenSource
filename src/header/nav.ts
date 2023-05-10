import * as ui from "../utils/ui";

const INFOS_ID = "infos";
const INFOS_PANEL_ID = INFOS_ID + "-panel";
const INFOS_PANEL_CLASSE_OUVERT = "ouvert";

const PDF_ID = "pdf";
const PDF_URL = require("../ppi.pdf");

const SOURCE_ID = "source";
const SOURCE_URL = "https://github.com/tensaiji/PPI-OpenSource";

const init_infos = async () => {
    const panel = document.getElementById(INFOS_PANEL_ID);
    const infos = document.getElementById(INFOS_ID);
    infos?.addEventListener("click", () => {
        ui.activation(infos);
        ui.alterner(panel, INFOS_PANEL_CLASSE_OUVERT);
    });
};

export const init = async () => {
    init_infos();
    ui.lien(PDF_ID, PDF_URL);
    ui.lien(SOURCE_ID, SOURCE_URL);
};