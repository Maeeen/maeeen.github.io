import PSquare from "../objects/PSquare"
import PScene from "./PScene"

export default class BasicScene extends PScene {
    constructor() {
        super([ new PSquare() ])
    }
}