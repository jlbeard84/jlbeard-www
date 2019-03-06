import "./src/styles";

import { BackgroundUpdater } from "./src/background-updater";
import { TimeUpdater } from "./src/time-updater";

const beatTimeElementId = "beats-time";

const backgroundUpdater = new BackgroundUpdater();
const timeUpdater = new TimeUpdater(document.getElementById(beatTimeElementId));

setInterval(() => {
    backgroundUpdater.update();
}, 250);

setInterval(() => {
    timeUpdater.update();
}, 100);






