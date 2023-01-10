import "../util-bg/canvas-resizer"
import FallingStarsDrawer from "./FallingStarsDrawer"

(() => {
    const rdy = () => {
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

        const drawer = new FallingStarsDrawer(canvas, ctx)
        drawer.setupAnimFrame()
    }

    document.addEventListener('DOMContentLoaded', () => rdy())
})()