import PObject from "../objects/PObject"

export default class PScene {
    constructor(public objects: PObject[] = []) { }

    static null() {
        return new PScene()
    }
}