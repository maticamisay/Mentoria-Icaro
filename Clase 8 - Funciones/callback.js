//Callback
//Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

//ejemplo1
function saludar(nombre) {
    console.log('Hola ' + nombre);
}
function procesarEntradaUsuario(callback) {
    console.log('Por favor ingresa tu nombre.');
    var nombre = process.argv[2]
    callback(nombre);
}
procesarEntradaUsuario(saludar);

//ejemplo 2
function crearCita(cita, callback) {
    var miCita = "Como yo siempre digo, " + cita;
    callback(miCita); // 2
}
function logCita(cita) {
    console.log(cita);
}
crearCita("come tus vegetales!", logCita); // 1


//ejemplo 3
function saludar(nombre) {
    console.log(nombre);
}
function crearCita(callback, nombre) {
    callback(nombre); // 2
}
crearCita(saludar, 'matias'); 
