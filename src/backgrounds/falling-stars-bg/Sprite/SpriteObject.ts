import DrawableObject from "../../util-bg/2d-draw/DrawableObject"
import { Position } from "../../util-bg/2d-draw/Types"
import { Sprite } from "../res/Stars"

export default class SpriteObject extends DrawableObject {
    private pixelSize: number = 5

    constructor(public position: Position, protected sprite: Sprite) {
        super()
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for(let y = 0; y < this.sprite.height; y++) {
            for(let x = 0; x < this.sprite.width; x++) {
                const color = this.sprite.imgData[x + y * this.sprite.width]
                this.drawPixel(ctx, color, { x: this.position.x + x, y: this.position.y + y })
            }
        }
    }

    private drawPixel(ctx: CanvasRenderingContext2D, color: number, position: Position) {
        // color is in format 0xaabbggrr
        ctx.fillStyle = '#' + (color & 0xffffffff).toString(16)
        ctx.fillRect(position.x * this.pixelSize, position.y * this.pixelSize, this.pixelSize, this.pixelSize)
    }
}