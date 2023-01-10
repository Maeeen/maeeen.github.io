import Drawer from "./draw/Drawer"
import Engine from "./Engine"
import BasicScene from "./scene/BasicScene"

const call = (() => {
    // canvas
    const canvas = document.querySelector('canvas')
    if (!canvas) {
        console.error("Could not find canvas.")
        return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) {
        console.error("Could not get drawing context for canvas.")
        return
    }

    const drawer = new Drawer(canvas, ctx)
    const engine = new Engine(new BasicScene())

    let lastTime = Date.now()

    const animFrame = () => {
        const curr = Date.now()
        const dt = (curr - lastTime) / 1000

        engine.step(dt)
        drawer.draw(engine)

        lastTime = curr

        requestAnimationFrame(animFrame)
    }

    animFrame()
})

document.addEventListener('DOMContentLoaded', () => call())