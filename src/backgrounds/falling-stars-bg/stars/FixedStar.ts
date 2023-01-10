import { Position } from "../../util-bg/2d-draw/Types"
import Stars from "../res/Stars"
import AnimatedSpriteObject from "./AnimatedSpriteObject"

export default class FixedStar extends AnimatedSpriteObject {
    constructor(pos: Position) {
        const star = Stars[ Math.floor(Math.random() * Stars.length) ]
        super(pos, star)
    }

    draw(ctx: CanvasRenderingContext2D, dt: number) {
        super.draw(ctx, dt)
    }
}