import Vector2d from "../util/Vector2d"

export default class DefinedForce {
    force: Vector2d
    application: Vector2d

    constructor(vec: Vector2d = Vector2d.null(), applicationPosition: Vector2d = Vector2d.null()) {
        this.force = vec
        this.application = applicationPosition
    }

    static null() {
        return new DefinedForce(Vector2d.null())
    }
}