import Force from "../forces/DefinedForce"
import Gravitational from "../forces/Gravitational"
import Vector2d from "../util/Vector2d"

export default abstract class PObject {
    position: Vector2d = Vector2d.null()
    speed: Vector2d = Vector2d.null()

    actingForces: Force[] = [ new Gravitational() ]

    computeAcceleration(): Vector2d {
        return [Force.null(), ...this.actingForces].reduce((prev, curr) => {
                    return new Force(prev.force.addVector(curr.force))
                }).force
    }

    abstract draw(canvas: CanvasRenderingContext2D): void
}