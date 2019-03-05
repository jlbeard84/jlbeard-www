export class BackgroundUpdater {
    private readonly MIN_VALUE: number = 200;
    private readonly MAX_VALUE: number = 255;

    private _body: HTMLElement;

    private _red: number;
    private _green: number;
    private _blue: number;

    private _isRedIncrementing: boolean;
    private _isGreenIncrementing: boolean;
    private _isBlueIncrementing: boolean;

    private _isRedDecrementing: boolean;
    private _isGreenDecrementing: boolean;
    private _isBlueDecrementing: boolean;

    constructor() {
        this._body = document.body;

        this._red = Math.floor((Math.random() * (this.MAX_VALUE - this.MIN_VALUE)) + this.MIN_VALUE);
        this._green = Math.floor((Math.random() * (this.MAX_VALUE - this.MIN_VALUE)) + this.MIN_VALUE);
        this._blue = Math.floor((Math.random() * (this.MAX_VALUE - this.MIN_VALUE)) + this.MIN_VALUE);

        this._isRedIncrementing = false;
        this._isGreenIncrementing = false;
        this._isBlueIncrementing = false;

        this._isRedDecrementing = false;
        this._isGreenDecrementing = false;
        this._isBlueDecrementing = false;

        this.setRandomIncrementingColor();
    }

    public update(): void {
        //console.log(this._body);

        if (this._isRedIncrementing) {
            this._red++;
        } else if (this._isRedDecrementing) {
            this._red--;
        }

        if (this._isGreenIncrementing) {
            this._green++;
        } else if (this._isGreenDecrementing) {
            this._green--;
        }

        if (this._isBlueIncrementing) {
            this._blue++;
        } else if (this._isBlueDecrementing) {
            this._blue--;
        }

        if (this._red > this.MAX_VALUE) {
            this._red = this.MAX_VALUE;
            this._isRedIncrementing = false;
            this.setRandomIncrementingColor();
        } else if (this._red < this.MIN_VALUE) {
            this._red = this.MIN_VALUE;
            this._isGreenDecrementing = false;
            this.setRandomDecrementingColor();
        }

        if (this._green > this.MAX_VALUE) {
            this._green = this.MAX_VALUE;
            this._isGreenIncrementing = false;
            this.setRandomIncrementingColor();
        } else if (this._green < this.MIN_VALUE) {
            this._green = this.MIN_VALUE;
            this._isGreenDecrementing = false;
            this.setRandomDecrementingColor();
        }

        if (this._blue > this.MAX_VALUE) {
            this._blue = this.MAX_VALUE;
            this._isBlueIncrementing = false;
            this.setRandomIncrementingColor();
        } else if (this._blue < this.MIN_VALUE) {
            this._blue = this.MIN_VALUE;
            this._isBlueDecrementing = false;
            this.setRandomDecrementingColor();
        }

        this._body.style.backgroundColor = `rgb(${this._red},${this._green},${this._blue})`;

        // if all three are at min/max, start a new incrementing/decrementing color
        if (this._red === this.MIN_VALUE && this._green === this.MIN_VALUE && this._blue === this.MIN_VALUE) {
            this._isRedDecrementing = false;
            this._isGreenDecrementing = false;
            this._isBlueDecrementing = false;
            this.setRandomIncrementingColor();
        } else if (this._red === this.MAX_VALUE && this._green === this.MAX_VALUE && this._blue === this.MAX_VALUE) {
            this._isRedIncrementing = false;
            this._isGreenIncrementing = false;
            this._isBlueIncrementing = false;
            this.setRandomDecrementingColor();
        } 
    }

    private setRandomIncrementingColor(): void {
        const selectedColor = Math.floor(Math.random() * 3);

        switch (selectedColor) {
            case 0:
                this._isRedIncrementing = true;
                break;
            case 1:
                this._isGreenIncrementing = true;
                break;
            case 2:
                this._isBlueIncrementing = true;
                break;
        }
    }

    private setRandomDecrementingColor(): void {
        const selectedColor = Math.floor(Math.random() * 3);

        switch (selectedColor) {
            case 0:
                this._isRedDecrementing = true;
                break;
            case 1:
                this._isGreenDecrementing = true;
                break;
            case 2:
                this._isBlueDecrementing = true;
                break;
        }
    }
}
