
export default abstract class DrawableObject {
    constructor() {

    }

    abstract draw(ctx: CanvasRenderingContext2D): void
}