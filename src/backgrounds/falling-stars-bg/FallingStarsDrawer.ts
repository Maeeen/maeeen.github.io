import Drawer from "../util-bg/2d-draw/Drawer"
import { Position } from "../util-bg/2d-draw/Types"
import FallingStar from "./stars/FallingStar"
import FixedStar from "./stars/FixedStar"
import SpriteObject from "./stars/SpriteObject"

export default class FallingStarsDrawer extends Drawer {
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super(canvas, ctx, 0)

        this.createStars()
    }

    private createStars(): void {
        const nbOfStars = Math.floor(Math.random() * 20) + 15

        Array(nbOfStars).fill(0).map(_ => new FixedStar(this.randomPosition())).forEach(s => this.addObject(s))
        this.addObject(new FallingStar({ x: 10, y: 10 }))
    }

    private randomPosition(): Position {
        return { x: Math.floor(Math.random() * this.canvas.width ) / SpriteObject.pixelSize ,
                 y: Math.floor(Math.random() * this.canvas.height) / SpriteObject.pixelSize }
    }
}