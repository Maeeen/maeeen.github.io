import { Position } from "../../util-bg/2d-draw/Types"
import { AnimatedSprite, Sprite } from "../res/Stars"
import SpriteObject from "./SpriteObject"

export default class AnimatedSpriteObject extends SpriteObject {
    private currentFrame: number = 0
    private beforeNextFrame: number = 0
    private nbFrames: number

    constructor(position: Position, protected animatedSprite: AnimatedSprite) {
        super(position, {
            height: animatedSprite.height,
            width: animatedSprite.width,
            imgData: animatedSprite.frames[ 0 ]
        }) // can not use fromAnimatedToStatic :(

        this.nbFrames = animatedSprite.frames.length
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.beforeNextFrame++
        if (this.beforeNextFrame >= this.animatedSprite.frameTime) {
            this.currentFrame = (this.currentFrame + 1) % this.nbFrames
            this.beforeNextFrame = 0;
        }

        this.sprite = this.fromAnimatedToStatic()

        super.draw(ctx)
    }

    private fromAnimatedToStatic() {
        return {
            height: this.animatedSprite.height,
            width: this.animatedSprite.width,
            imgData: this.animatedSprite.frames[ this.currentFrame ]
        }
    }
}