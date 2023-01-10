import Star1 from "./Star1"
import Star2 from "./Star2"

export type AnimatedSprite = {
    height: number,
    width: number,
    frameTime: number,
    frames: number[][]
}

export type Sprite = {
    height: number,
    width: number,
    imgData: number[]
}

export default [Star1, Star2] as AnimatedSprite[]