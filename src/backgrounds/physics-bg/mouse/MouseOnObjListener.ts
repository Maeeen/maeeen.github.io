export default class MouseListener {
    constructor() {
        let self = this
        document.addEventListener('click', e => {
            self.onClick(e)
        })
    }

    private onClick(e: MouseEvent): void {
        
    }
}