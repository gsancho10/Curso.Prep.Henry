// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
<<<<<<< HEAD

    return array [0]
=======
    
    return array[0]


>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

<<<<<<< HEAD
    return array[array.length - 1]
=======
  return array[array.length - 1]
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

<<<<<<< HEAD
  return array.length;
=======
    return array.length
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
<<<<<<< HEAD
    var nuevoArray = []
    for (let i = 0; i < array.length; i++){ 
   
       nuevoArray[i] = array[i] + 1

    }
    return nuevoArray
=======
    let newArr = []

    for (var i = 0; i < array.length; i++) {
      newArr[i] = array[i] + 1 
    }
    return newArr 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
<<<<<<< HEAD
    array.push(elemento)
    return array 
=======

   array.push(elemento)
   return array 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

    array.unshift(elemento)
<<<<<<< HEAD
    return array
=======
    return array 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

<<<<<<< HEAD
   
      return palabras.join (' ') 
    
=======

    return palabras.join(' ')
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
<<<<<<< HEAD
        var i = 0
      for (let i = 0; i < array.length; i++);
        if (array[i] === elemento){
          return true
        }
        else{
          return false 
        }
=======
    for (var i = 0; i < array.length; i++) {
      if (array.includes ( elemento )){
        return true
      }
    }
    return false 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
<<<<<<< HEAD

      var sum = 0
      for (let i = 0; i < numeros.length; i++) {
        sum += numeros[i]
        }
        return sum
=======
  var suma = 0
    for (var i = 0; i < numeros.length; i++) {
      suma += numeros[i]
    }
    return suma 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
<<<<<<< HEAD

    var Puntajes = 0
    var promedio = 0
    for (let i = 0; i < resultadosTest.length; i++) {
      Puntajes += (resultadosTest[i]) 
      promedio = Puntajes / resultadosTest.length
      
    }
    return promedio
=======
   var suma = 0 
  for (var i = 0 ; i < resultadosTest.length; i++) {
      
      suma += resultadosTest[i]
      prom = suma / resultadosTest.length
  }
  return prom
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}
 
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    var mayor = 0
<<<<<<< HEAD
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > mayor)
        mayor = numeros[i]  
      
    }
    return mayor
}   
=======
    for (var i = 0; i < numeros.length; i++) {
      if (mayor > numeros[i]) {
        return mayor 
      } else {
        mayor = numeros[i]
      }
    }
    return mayor 
}
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
<<<<<<< HEAD
    if (arguments.length < 1){
      return 0
    }
    var total = 1
    for (let i = 0; i < arguments.length; i++) {
      total = arguments[i] * total
      
    }
    return total
=======
    if (arguments.length < 1) {
      return 0
    }
    var total = 1
    for (var i = 0; i < arguments.length; i++) {
      total = total * arguments[i]
    }
    return total 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
<<<<<<< HEAD
  
  let newArray = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 19){
      
      newArray++
      
    }
  }
  return newArray
    

=======
    var mas18 = 0
    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > 18) {
        mas18++
      }
    }
    return mas18
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

<<<<<<< HEAD
  //No hace falta el For, no te pide que busques dentro del array

      if ( numeroDeDia === 1 || numeroDeDia === 7) {
        return ('Es fin de semana')
   } else {
     return ('Es dia Laboral')
   }
     
} 
=======
    
      if (numeroDeDia === 1 || numeroDeDia === 7) {
        return 'Es fin de semana'
      }else {
        return 'Es dia Laboral'
      }
         
    }           
    
    

>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
<<<<<<< HEAD
    let num = n.toString()
    if (num.charAt(0) === '9') {
      return true
    }
    return false 
=======

    let num = n.toString()
  if(num.charAt(0) === "9"){
    return true
  }
  return false
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}
  


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
<<<<<<< HEAD
  
    for (let i = 0; i < arreglo.length - 1; i++) {
      if (arreglo [i] !== arreglo [i+1]) {
        return false
      }
    }
    
    return true
         
=======
    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo.every (i => arreglo[0] == i)) {
        return true
      }
      return false
    }
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
<<<<<<< HEAD
    var newArr = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre')  { //Si alguno de los elementos es igual a alguno de los meses, pusheo ese mes en un arreglo

        newArr.push(array[i])
           }
        } 
        if (newArr.length < 3) { //Si es menor a 3 quiere decir que no encontro los 3 meses pedidos
          
          return 'No se encontraron los meses pedidos'
        } 
              
    
    return newArr
=======
    var meses = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){

        meses.push(array[i])
      } 
    }
     if (meses.length < 3){
      return 'No se encontraron los meses pedidos'
     } else {
      return meses 
     }

>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
<<<<<<< HEAD

    var newArr = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 100){

        newArr.push(array[i])

      }
      
    }
    return newArr
=======
    var newArr = []
      for (var i = 0; i < array.length; i++) {
        
        if (array[i] > 100 ) {
          newArr.push(array [i])
        
        } 
       }
           return newArr
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
<<<<<<< HEAD

  var array = []
  var suma = numero
   for (var i = 0; i < 10; i++) {
     suma = suma + 2
     if (suma === i) break // si el numero suma es igual al numero de iteracion, se interrumpe
     else{
       array.push(suma)
     }     
   }
    if (i < 10){
      return 'Se interrumpió la ejecución'
    }else {

      return array
    }
  
  }

=======
    var newArr = []
    var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      newArr.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return newArr;
  }
     

}
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
<<<<<<< HEAD
  var array = []
  var suma = numero
  
    for (let i = 0; i < 10; i++) {
      if(i === 5) continue // cuando la iteracion es igual a 5, pasa a la siguente con (continue), sino, sigue con la suma y el push al nuevo array
      else {
        suma = suma + 2
        array.push(suma)
      }
      
    }
      return array
=======
    var array = []
    var suma = numero 
    for (var i = 0; i < 10; i++) {
     if ( i === 5){
      continue 
      } else {
        suma = suma + 2
        array.push(suma)
      }
    }
    return array 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
