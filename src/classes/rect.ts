import Body from "./body";
import Entity, {DefaultEntityOptions, EntityOptions} from "./entity";
import {FRICTION, PLAYER_SPEED} from "./consts";

export type RectOptions = EntityOptions & {
    width: number;
    height: number;
    static: boolean;
}

const DefaultRectOptions: RectOptions = {
    ...DefaultEntityOptions,
    width: 10,
    height: 10,
    static: false,
}

export default class Rect extends Entity {
    private readonly _static: boolean;
    private readonly _width: number;
    private readonly _height: number;

    private _vx: number = 0;
    private _vy: number = 0;
    private _ax: number = 0;
    private _ay: number = 0;

    constructor(options: RectOptions = DefaultRectOptions) {
        super(options);

        this._static = options.static
        this._width = options.width;
        this._height = options.height;
    }

    public update(keys) {
        this._ax = 0;
        this._ay = 0;

        if(keys["KeyD"])
            this._ax = PLAYER_SPEED;

        if(keys["KeyA"])
            this._ax = -PLAYER_SPEED;

        if(keys["KeyS"])
            this._ay = PLAYER_SPEED;

        if(keys["KeyW"])
            this._ay = -PLAYER_SPEED;


        this._ax *= FRICTION;
        this._ay *= FRICTION;

        this._vx += this._ax;
        this._vy += this._ay;
        this._vx *= FRICTION;
        this._vy *= FRICTION;

        this.x += this._vx;
        this.y += this._vy;
    }

    public render(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.fillStyle = '#000000';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    }

    public applyForce(isX: boolean, force: number) {
        if (isX)
            this._ax += force
        else
            this._ay += force
    }

    get static(): boolean {
        return this._static;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height
    }

    get ay(): number {
        return this._ay;
    }

    set ay(value: number) {
        this._ay = value;
    }

    get ax(): number {
        return this._ax;
    }

    set ax(value: number) {
        this._ax = value;
    }

    get vy(): number {
        return this._vy;
    }

    set vy(value: number) {
        this._vy = value;
    }

    get vx(): number {
        return this._vx;
    }

    set vx(value: number) {
        this._vx = value;
    }
}
