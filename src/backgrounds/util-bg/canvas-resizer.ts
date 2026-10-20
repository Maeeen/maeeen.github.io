(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.querySelector('canvas')

        if (!canvas) {
            console.warn('Could not get canvas')
            return
        }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        window.addEventListener('resize', resize)
        resize()
    })
})()