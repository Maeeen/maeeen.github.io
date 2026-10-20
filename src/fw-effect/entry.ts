export default (() => {
    const applyEffect = (element: HTMLElement) => {
        element.addEventListener("mouseenter", () => {

        })

        element.addEventListener("mouseleave", () => {

        })

        element.addEventListener("mousemove", () => {
            
        })
    }

    document.querySelectorAll(".hover-effect").forEach(x => applyEffect)
})