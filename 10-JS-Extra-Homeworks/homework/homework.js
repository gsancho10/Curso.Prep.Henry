// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var arreglo = []
  //Para recorrer un objeto, utilizamos el concepto "FOR IN" //
  for(valor in objeto) { //PARA el valor DENTRO del objeto//
    arreglo.push([valor, objeto[valor]]) // valor vendria a ser las letras (D, B, C..) y el objeto dentro de ese valor es el numero corresp.//
  }
  return arreglo 
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  // Lo que nos pide es armar un objeto durante el recorrido al string, si encuentra una nueva letra crea un nuevo valor en el objeto, si ya esta creada, solo suma 
  var objeto = {};
  for (i=0;i<string.length; i++) {
    if(objeto.hasOwnProperty(string[i])) {
      objeto[string[i]] += 1;
    }
    else {
      objeto[string[i]] = 1
    }
  }
  return objeto 
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = '' // Creamos dos variables donde se almacenen las mayusculas y minusculas
  var minus = ''
  for (i=0;i<s.length;i++) {
    if(s[i] === s[i].toUpperCase()) { // usamos IF para saber si la letra del string 's' esta en mayusc. 
                                      //  De ser verdadero, lo almacenamos en la variable mayus
      mayus += s[i]
    }
    else{
      minus += s[i]
    }
  }
  return mayus + minus 

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    // Nos conviene trabajarlo como un array para poder usar sus metodos
    //el .split convierte el string en un array, lo dejaria [The,Henry,Challenge,is,close]
    //.map recibe una funcion, lo que hace el map es pasar por cada elemento del array con esa funcion
    var reverse = str.split(' ').map(function(elemento){
      //el segundo split convierte el elemento (The) en un array [T,h,e], usamos reverse [e,h,T] y el join los une (ehT)
      return elemento.split('').reverse().join('')
    })
    //usamos join(' ') para convertir el array que nos deja arriba en una string
    return reverse.join(' ')
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
      let num = numero.toString() // Sirve para que el numero se convierta en un string y asi poder usar lo de abajo
    if(num === num.split('').reverse().join('')) { // al convertir el numero en string (toString), usamos el split para dividir, reverse para dar vuelta y join para volver a unir el string

      return 'Es capicua'
    }
      return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    var cadena2 = ''
      for (i = 0; i < cadena.length; i++) {
        // NO HACE FALTA BORRAR, directamente creamos una cadena nueva quitando a b c con continue
        if(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c'){
          continue
        } else {
           cadena2 += cadena[i];
        }
          
      }
      return cadena2 
      
}





function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
   var c = true
   while (c) {
    c = false
    for (let i = 0; i < arr.length-1; i++) {
      
      if(arr[i].length > arr[i +1].length){
        var aux = arr[i] // Guardo el elemento que esta en la posicion i en una variable, para que cuando cambie de lugar el elemento no se pierda el que
                          //estaba antes en la posicion i
        arr[i] = arr[i+1] //Ahora hago que el elemento que estaba en i+1 pase a i, ya que al otro elemento lo guarde en una variable, no lo pierdo
        arr[i+1] = aux // Aqui ya guardo mi variable en la posicion siguiente
        c = true
      } 
    }
  }
    return arr 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3 = []
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]) {
        arreglo3.push(arreglo1[i])
      }
      
    }
    
  }
  return arreglo3 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

