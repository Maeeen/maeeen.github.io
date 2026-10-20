export default class Vector2d {
    x: number = 0
    y: number = 0

    private readonly ratioToScreen: number = 20

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static null() {
        return new Vector2d(0, 0);
    }

    add(x: number, y: number) {
        return new Vector2d(this.x + x, this.y + y)
    }

    addVector(v: Vector2d) {
        return new Vector2d(this.x + v.x, this.y + v.y)
    }

    times(f: number) {
        return new Vector2d(this.x * f, this.y * f)
    }

    toDrawingPosition() {
        return this.times(this.ratioToScreen)
    }

    toRealPosition() {
        return this.times(1/this.ratioToScreen)
    }
}