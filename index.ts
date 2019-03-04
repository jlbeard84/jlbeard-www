import "./src/styles";

import { BackgroundUpdater } from "./src/background-updater";

const updater = new BackgroundUpdater();

setInterval(() => {
    updater.update();
}, 200);




