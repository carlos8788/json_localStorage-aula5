const persona = {
    nombre: 'Luis',
    edad: 35
}

// console.log(persona)
// console.log(typeof(persona))

const jsonPersona = JSON.stringify(persona)

// console.log(jsonPersona)
// console.log(typeof(jsonPersona))

const jsonString = '{"nombre":"Lucas", "edad":30}'

// console.log(jsonString)
// console.log(typeof(jsonString))

const persona2 = JSON.parse(jsonString)
// console.log(persona2)
// console.log(typeof(persona2))

localStorage.setItem('nombre', JSON.stringify(persona2))

const datos = localStorage.getItem('nombre')
console.log(datos)

localStorage.removeItem('nombres')

localStorage.clear()