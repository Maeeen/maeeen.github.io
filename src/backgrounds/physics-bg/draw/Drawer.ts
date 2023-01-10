import Engine from "../Engine"

export default class Drawer {
    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D) {

    }

    draw(engine: Engine) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for(const obj of engine.scene.objects) {
            obj.draw(this.ctx)
        }
    }
}