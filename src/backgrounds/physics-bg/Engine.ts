import PScene from "./scene/PScene"

export default class Engine {
    constructor(public scene: PScene) { 
        
    }

    step(dt: number) {
        for(const object of this.scene.objects) {
            object.position = object.position.addVector(object.speed.times(dt));

            // acceleration
            object.speed = object.speed.addVector(object.computeAcceleration().times(dt))
        }
    }
}