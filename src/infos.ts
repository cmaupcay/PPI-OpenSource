import * as ui from "./utils/ui";

const INSA_ID = "insa";
const INSA_URL = "https://www.insa-toulouse.fr/";

export const init = async () => {
    ui.lien(INSA_ID, INSA_URL);
};