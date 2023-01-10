import Drawer from "../util-bg/2d-draw/Drawer"
import { Position } from "../util-bg/2d-draw/Types"
import FixedStar from "./Sprite/FixedStar"
import SpriteObject from "./Sprite/SpriteObject"

export default class FallingStarsDrawer extends Drawer {
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super(canvas, ctx, 2)

        this.createStars()
    }

    private createStars(): void {
        const nbOfStars = Math.floor(Math.random() * 20) + 15

        Array(nbOfStars).fill(0).map(_ => new FixedStar(this.randomPosition())).forEach(s => this.addObject(s))
    }

    private randomPosition(): Position {
        return { x: Math.floor(Math.random() * this.canvas.width ) / SpriteObject.pixelSize ,
                 y: Math.floor(Math.random() * this.canvas.height) / SpriteObject.pixelSize }
    }
}