//function expression
const ejemplo = function (arg) { console.log(arg); }

ejemplo ('hola')

//
//hoisting
// no son compatibles con el hoisting

hola('Victor')
// ReferenceError: hola is not defined

const hola = function hola(nombre) {
    console.log(`Hola ${nombre}.`)
}