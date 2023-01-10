import { Position } from "../../util-bg/2d-draw/Types"
import Star1 from "../res/Star1"
import AnimatedSpriteObject from "./AnimatedSpriteObject"
import SpriteObject from "./SpriteObject"

export default class FallingStar extends SpriteObject {
    private oldPositions: Position[] = []

    private speed: Position = { x: 3, y: -.3 }
    private acceleration: Position = { x: 12, y: (-1) }
    

    constructor(initialPosition: Position) {
        super(initialPosition, AnimatedSpriteObject.fromAnimatedToStatic(Star1, 0))
    }

    draw(ctx: CanvasRenderingContext2D, dt: number) {
        
        this.oldPositions.push({ ... this.position })

        this.position.x += this.speed.x * dt
        this.position.y += this.speed.y * dt
        this.speed.x += this.acceleration.x * dt
        this.speed.y += this.acceleration.y * dt

        // step
        this.oldPositions = this.oldPositions.slice(-100)

        const color = 0xffe7d0
        let opacity = 0xee
        for(const pos of this.oldPositions) {
            opacity -= 10
            this.drawPixel(ctx, (opacity << 24) | color, { x: pos.x + this.sprite.width / 2, y: pos.y + this.sprite.height / 2})
        }

        super.draw(ctx, dt)
    }
}