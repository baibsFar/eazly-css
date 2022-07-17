// Prevent window scroll
window.addEventListener('wheel', (e) => { 
    e.preventDefault()
    e.stopPropagation()
}, { passive: false })

window.addEventListener('keydown', (e) => { 
    e.preventDefault()
    e.stopPropagation()
}, { passive: false })