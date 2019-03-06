import * as dotbeat from "dotbeat";

export class TimeUpdater {

    private readonly _element: HTMLElement;

    constructor(element: HTMLElement) {
        this._element = element;
    }

    public update(): void {
        const currentBeats = dotbeat.get("string", true);
        this._element.innerHTML = currentBeats;
    }
}
