//Object literal enhacement

const banda = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ['Master of puppets', 'seek & Destroy', 'Enter Sandman']

//Forma anterior
// const Metallica = {
//     banda : banda,
//     genero: genero,
//     canciones: canciones
// }

//forma nueva
const metallica = { banda, genero, canciones }

console.log(metallica)
