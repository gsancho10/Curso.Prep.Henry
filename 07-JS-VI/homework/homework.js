// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
<<<<<<< HEAD
  cb()
=======
  return cb()
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
<<<<<<< HEAD
  cb(n1, n2)
=======
  return cb(n1, n2)
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
<<<<<<< HEAD
    var suma = numeros.reduce(function(acc, tot){
      return suma = acc + tot
    },0)
    cb(suma)
=======
  var sumaTot = numeros.reduce(function (acc, tot){
    return acc + tot
  },0)

  cb(sumaTot)
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(cb)
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
<<<<<<< HEAD
    var newArr = array.map(cb)
    return newArr 
    
=======
  
  var newArr = array.map(function(nuevo){
    return cb(nuevo)
  })
  return newArr
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var newArr = []
<<<<<<< HEAD
  for (let i = 0; i < array.length; i++) {
    if(array[i][0] === 'a')
      newArr.push(array[i])
    
=======
  for (var i = 0; i < array.length; i++) {
    if(array[i][0] === 'a') {
      newArr.push(array[i])
    }
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
  }
  return newArr
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
