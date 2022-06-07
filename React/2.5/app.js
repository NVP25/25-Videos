//Template strings

const nombre = 'Juan'
const trabajo = 'Desarrollador Web'

// concatenar javascript
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`)

//concatenar con multiples lineas
const contenerdorApp = document.querySelector('#app')
// let html = '<ul>' +
//                  '<li> Nombre: ' + nombre + '</li>'
//                  '<li> Trabajo: ' + trabajo + '</li>' +
//            '</ul>';

let html = `
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>
    `
contenerdorApp.innerHTML = html
