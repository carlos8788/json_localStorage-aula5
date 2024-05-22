// Ejercicio 2
const btn = document.querySelector('button')

let classStyle = localStorage.getItem('class')

if (classStyle !== null) {
    document.body.classList.add(classStyle)
    if (classStyle === 'dark') {
        btn.innerText = 'LIGHT'
    } else {
        btn.innerText = 'DARK'
    }
}
else {
    document.body.classList.add('light')
}

btn.addEventListener('click', function () {
    if (this.innerText === 'DARK') {
        this.innerText = 'LIGHT'
        document.body.classList.remove('light')
        document.body.classList.add('dark')
        localStorage.setItem('class', 'dark')
    }
    else {
        this.innerText = 'DARK'
        document.body.classList.remove('dark')
        document.body.classList.add('light')
        localStorage.setItem('class', 'light')
    }
})
