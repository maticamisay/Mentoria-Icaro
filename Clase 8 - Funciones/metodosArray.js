//Métodos de arrays

//forEach
//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
numbers.map(numero => numero * 3)

//map()
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
    const doble = x * 2;
    let nombre = doble + 'hola'
    return nombre;
});
var triples = numbers.map(numero => numero * 3)
console.log(triples);
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

// var nuevo_array = arr.map(function callback(currentValue, index, array) {
//     // Elemento devuelto de nuevo_array
// })

//Reduce
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const array2 = [0, 1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const valorInicial = 10;
const sumaConValorInicial = array2.reduce(
    (valorAnterior, valorActual) => valorAnterior + valorActual,
    valorInicial
);
console.log(sumaConValorInicial);
// expected output: 20

//Primer llamado
valorAnterior=10, currentValue=0

//Segundo llamado
valorAnterior=10, valorActual=1

//Tercer llamado
valorAnterior=11, valorActual=2

//Cuarto llamado
valorAnterior=13, valorActual=3

//Quinto llamado
valorAnterior=16, valorActual=4

//Valor final: 20

