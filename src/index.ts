import * as header from "./header";
import * as contenu from "./contenu";
import * as infos from "./infos";

import "./style.scss"

const init = async () => {
    header.init();
    contenu.init();
    infos.init();    
};

init();