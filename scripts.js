const $panels = document.querySelectorAll('.panel')

$panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses($panels)
        panel.classList.add('active')
    })
})

const removeActiveClasses = (target) => {
    target.forEach(item => item.classList.remove('active'))
}