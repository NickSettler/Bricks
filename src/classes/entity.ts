export type EntityOptions = {
    x: number;
    y: number;
}

export const DefaultEntityOptions: EntityOptions = {
    x: 0,
    y: 0
}

export default class Entity {
    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    private _x: number;
    private _y: number;

    constructor(options: EntityOptions = DefaultEntityOptions) {
        this._x = options.x;
        this._y = options.y;
    }
}
