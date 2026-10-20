import DrawableObject from "../../util-bg/2d-draw/DrawableObject"
import { Position } from "../../util-bg/2d-draw/Types"
import { Sprite } from "../res/Stars"

export default class SpriteObject extends DrawableObject {
    public static pixelSize: number = 5

    constructor(public position: Position, protected sprite: Sprite) {
        super()
    }

    draw(ctx: CanvasRenderingContext2D, dt: number): void {
        for(let y = 0; y < this.sprite.height; y++) {
            for(let x = 0; x < this.sprite.width; x++) {
                const color = this.sprite.imgData[x + y * this.sprite.width]
                this.drawPixel(ctx, color, { x: this.position.x + x, y: this.position.y + y })
            }
        }
    }

    protected drawPixel(ctx: CanvasRenderingContext2D, color: number, position: Position) {
        // color is in format 0xaabbggrr
        // TODO: need to find better (surely exists lol)
        const r = color & 0xff
        const g = color >> 8 & 0xff
        const b = color >> 16 & 0xff
        const a = color >> 24 & 0xff

        ctx.fillStyle = '#' + r.toString(16) + g.toString(16) + b.toString(16) + a.toString(16)
        ctx.fillRect(position.x * SpriteObject.pixelSize, position.y * SpriteObject.pixelSize, SpriteObject.pixelSize, SpriteObject.pixelSize)
    }
}