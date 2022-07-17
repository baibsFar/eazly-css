const pages = document.querySelectorAll('div[id*="page-"]')
let page = 0

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowDown':
            if (page < pages.length - 1) page++
            break
        case 'ArrowUp':
            if (page > 0) page--
            break
        case 'r':   //  Refresh the page
            location.reload()
            break
        default:
            break
    }
    location.hash = '#' + pages[page].id
})