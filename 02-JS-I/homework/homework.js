// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
<<<<<<< HEAD
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5 ;

// Crea una variable booleana:
const nuevoBool = true;
=======
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;

>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str
<<<<<<< HEAD
=======
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x + y
=======
   suma = x + y 
   return suma
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x - y
=======
    resta = x - y 
    return resta 
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x * y
=======
    multip = x * y 
    return multip 
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x / y;
=======
    div = x/y   
    return div 
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
    if (x === y) {
<<<<<<< HEAD
    return true;
}
  return false; 
=======
      return true;
    }
  return false
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
<<<<<<< HEAD
  // Tu código
      
    return str1.length === str2.length;
=======
  // Tu código:
  if (str1.length === str2.length) {
    return true
  } 
  return false
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5

}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
    if (num < 90 ) {
    return true;
   
  }     

    return false; 
=======
    if (num < 90) {
      return true
    }
  return false
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
    if (num > 50) {
<<<<<<< HEAD
    return true; 
  }

  return false;
=======
      return true
    }
    return false
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
<<<<<<< HEAD
    return x % y;
=======
    resto = x % y 
    return resto 
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
    if (num % 2 === 0) {
<<<<<<< HEAD
      return true;
    }
    return false;
=======
      return true

    } 
  return false 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
    if (num % 2 !== 0) {
      return true;
    }   
    return false;
=======
    if (num % 2 !== 0){
      return true

    }
  return false
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
<<<<<<< HEAD
      
    return num * num ;
  
=======
    cuad = num * num 
    return cuad 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
<<<<<<< HEAD
    return Math.pow(num, 3);

=======
    cubo = num * num * num 
    return cubo 
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:

<<<<<<< HEAD
  return Math.pow(num, exponent);
=======
    return Math.pow(num, exponent)
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
<<<<<<< HEAD

    return Math.round(num);
=======
    return Math.round(num)
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
<<<<<<< HEAD

    return Math.ceil(num);
=======
   return Math.ceil(num)
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function numeroRandom(num) {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
    
<<<<<<< HEAD
      return Math.random(num);
=======
      return Math.random(num)
    
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
<<<<<<< HEAD

  if(numero === 0) {
      return false; 
  }
  if(numero > 0) {
    return 'Es positivo'
   }
    else { 
=======
    if (numero === 0) {
      return false;
    } else if(numero > 0) {
      return 'Es positivo'
    } else {
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
      return 'Es negativo'
    }
}


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

<<<<<<< HEAD
    return str + '!';

}   
=======
    return (str + '!') 
  }
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
<<<<<<< HEAD
      var combinado = nombre + ' ' + apellido; 
      return combinado;
=======

    return (nombre + ' ' + apellido)
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
<<<<<<< HEAD
      return 'Hola ' + nombre + '!'
=======

      return ('Hola' + ' ' +nombre + '!')
  
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
<<<<<<< HEAD
    return (alto * ancho);
=======
    area = alto * ancho
    return area 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
    
<<<<<<< HEAD
    return lado * 4
=======
    perimetro = lado + lado + lado + lado 
    return perimetro 

>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
    area = (base * altura)/ 2
    return area 

    return (base * altura) / 2
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
<<<<<<< HEAD

    return euro * 1.20
=======
      dolar = euro * 1.20
      return dolar 
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
<<<<<<< HEAD
  
  if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es vocal';

    }
     if (letra.length > 1) {
    return 'Dato incorrecto';

    }
   return 'Dato incorrecto'
  
  }
    
    




=======
    if (letra.length > 1) {
      return 'Dato incorrecto';
    } 
      if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') { 
        return 'Es vocal'
         }
         return 'Dato incorrecto'
  }
>>>>>>> e4df0b17619decd5826bac620a57d417da4ae9d5

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
