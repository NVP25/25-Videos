//Objetos

//Object Literal
const persona = {
 nombre: 'Juan',
 profesion: 'Desarrollador Web',
 edad: 500,
}
console.log(persona)

//Object Constructor
function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}

// crearuna nueva tarea:
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente')
const tarea2 = new Tarea('Preparar cafe', 'Urgente')
const tarea3 = new Tarea('Pasear al perro', 'Media')
const tarea4 = new Tarea('Conocer a mis suegros', 'Baja')

console.log(tarea1)
console.log(tarea2)
console.log(tarea3)
console.log(tarea4)
