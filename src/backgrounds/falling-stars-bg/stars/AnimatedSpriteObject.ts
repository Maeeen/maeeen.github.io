import { Position } from "../../util-bg/2d-draw/Types"
import { AnimatedSprite, Sprite } from "../res/Stars"
import SpriteObject from "./SpriteObject"

export default class AnimatedSpriteObject extends SpriteObject {
    private currentFrame: number = 0
    private beforeNextFrame: number = 0
    private nbFrames: number

    constructor(position: Position, protected animatedSprite: AnimatedSprite) {
        super(position, AnimatedSpriteObject.fromAnimatedToStatic(animatedSprite, 0)) // can not use fromAnimatedToStatic :(

        this.nbFrames = animatedSprite.frames.length
    }

    draw(ctx: CanvasRenderingContext2D, dt: number): void {
        this.beforeNextFrame++
        if (this.beforeNextFrame >= this.animatedSprite.frameTime) {
            this.currentFrame = (this.currentFrame + 1) % this.nbFrames
            this.beforeNextFrame = 0;
        }

        this.sprite = AnimatedSpriteObject.fromAnimatedToStatic(this.animatedSprite, this.currentFrame)

        super.draw(ctx, dt)
    }

    public static fromAnimatedToStatic(animatedSprite: AnimatedSprite, currentFrame: number) {
        return {
            height: animatedSprite.height,
            width: animatedSprite.width,
            imgData: animatedSprite.frames[ currentFrame ]
        }
    }
}