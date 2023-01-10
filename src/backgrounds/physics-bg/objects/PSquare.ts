import PObject from './PObject'

export default class PSquare extends PObject {
    draw(canvas: CanvasRenderingContext2D) {
        const drawPos = this.position.toDrawingPosition()
        canvas.fillRect(drawPos.x, drawPos.y, 100, 100)
    }
}