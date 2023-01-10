import Vector2d from "../util/Vector2d"
import Force from "./DefinedForce"

export default class Gravitational extends Force {
    private static readonly G = 9.81

    constructor() {
        super(new Vector2d(0, Gravitational.G))
    }
}