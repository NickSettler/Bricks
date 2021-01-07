import Rect from "./classes/rect";

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d');
const width = canvas.width = 600;
const height = canvas.height = 400;

const keys = {};

document.addEventListener('keydown', e => {
    keys[e.code] = true;
})

document.addEventListener('keyup', e => {
    keys[e.code] = false;
})

const r1: Rect = new Rect();

const update = () => {
    r1.update(keys);
}

const render = () => {
    context.clearRect(0, 0, width, height);

    r1.render(context);
}

const main = () => {
    update();
    render();

    requestAnimationFrame(main);
}

main();
