document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.next-page').forEach(x => {
        x.addEventListener('click', e => {
            e.preventDefault()

            const p = document.querySelector('#detail-page')
            if (p) p.scrollIntoView({ behavior: 'smooth' })
            else window.location.href = "#detail-page"
        })
    })
})