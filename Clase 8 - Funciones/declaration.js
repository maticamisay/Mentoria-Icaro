//Function declaration.

function hola(nombre) {
    console.log(`Hola ${nombre}.`)
}
hola('Victor');    // => Hola Victor

//
//undefined
//
function respuesta() {
}
console.log(respuesta());    // => undefined

function respuesta2() {
    return 'Hola';
}
console.log(respuesta2());   // => Hola

//
//hoisting
//es una caracteristica de javascript por la cual se ejecutan al principio de la ejecución del código.
hola('Victor');      // => Hola Victor
function hola(nombre) {
    console.log(`Hola ${nombre}.`)
}
// así corre el código:
// function hola(nombre){
//     console.log(`Hola ${nombre}.`)
// }
// hola('Victor');    // => Hola Victor