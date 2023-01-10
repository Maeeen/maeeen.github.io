import DrawableObject from "./DrawableObject"

export default class Drawer {
    protected objs: DrawableObject[] = []
    private lastTime: number = Date.now()
    private firstDraw: boolean = true

    // sfp stands for seconds per frame i.e. how many seconds per frame
    // = 0 => illimited
    constructor(protected canvas: HTMLCanvasElement, protected ctx: CanvasRenderingContext2D, protected spf: number = 0) {
        
    }

    drawHandler(dt: number) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.objs.forEach(d => d.draw(this.ctx, dt))
    }

    addObject(obj: DrawableObject) {
        this.objs.push(obj)
    }

    removeObject(obj: DrawableObject) {
        this.objs = this.objs.filter(x => x != obj)
    }

    setupAnimFrame() {
        const animFrame = () => {
            const curr = Date.now()

            const dt = (curr - this.lastTime) / 1000

            if (this.spf > 0 && dt < this.spf && !this.firstDraw) {
                return requestAnimationFrame(animFrame);
            }

            this.firstDraw = false;
    
            this.drawHandler(dt)
    
            this.lastTime = curr
    
            requestAnimationFrame(animFrame)
        }
    
        animFrame()
    }

}