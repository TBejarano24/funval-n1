// let edad = NaN;
// while (isNaN(edad)) {
//   edad = parseInt(prompt("¿Qué edad tiene?"));
//   if (edad >= 100) {
//     alert("Wow, usted si que es viej@, pero tiene edad para votar");
//   } else if (edad >= 18) {
//     alert("Usted tiene edad para votar");
//   } else if (edad < 0) {
//     alert("Usted ni siquiera nació");
//   } else if (edad < 18) {
//     alert("Usted es demasiado joven para votar");
//   } else {
//     alert("Respuesta inválida, mens@");
//   }
// }
// let numero = 0;

// while (true) {
//   numero = parseFloat(prompt("Ingrese un número"));
//   if (numero > 0) {
//     alert("Su número es positivo");
//     break;
//   } else if (numero === 0) {
//     alert("Su número es 0, obvio");
//     break;
//   } else if (numero < 0) {
//     alert("Su número es negativo");
//     break;
//   } else {
//     alert("Dije número");
//   }
// }
// let diaSemana = 0;

// diaSemana = parseInt(prompt("Seleccione un número del 1 al 7"));

// switch (diaSemana) {
//   case 1:
//     alert("Hoy es Lunes");
//     break;
//   case 2:
//     alert("Hoy es Martes");
//     break;
//   case 3:
//     alert("Hoy es Miércoles");
//     break;
//   case 4:
//     alert("Hoy es Jueves");
//     break;
//   case 5:
//     alert("Hoy es Viernes");
//     break;
//   case 6:
//     alert("Hoy es Sábado");
//     break;
//   case 7:
//     alert("Hoy es Domingo");
//     break;
//   default:
//     alert("Eso no es una opción válida");
// }
// let numero = parseInt(prompt("Escoja un número"));

// if (!isNaN(numero)) {
//   switch (numero % 2) {
//     case 0:
//       alert("El número es par");
//       break;
//     default:
//       alert("El número es impar");
//   }
// } else {
//   alert("Ese no es un número");
// }
// let nota = 0;

// while (true) {
//   nota = parseFloat(prompt("¿Cuál fue su nota?"));
//   if (!isNaN(nota)) {
//     if (nota >= 0 && nota <= 10) {
//       alert("Desaprobado");
//       break;
//     } else if (nota > 10 && nota <= 13) {
//       alert("Regular");
//       break;
//     } else if (nota > 13 && nota <= 17) {
//       alert("Bueno");
//       break;
//     } else if (nota > 17 && nota <= 20) {
//       alert("Excelente");
//       break;
//     } else {
//       alert("Nota inválida");
//     }
//   } else {
//     alert("Nota inválida");
//   }
// }
// let number = null;
// while (true) {
//   number = parseInt(prompt("Ingrese el número cuya tabla desea ver"));
//   if (!isNaN(number)) {
//     for (let i = 1; i < 11; i++) {
//       numberDisplay = number * i;
//       console.log(number + " X " + i + " = " + numberDisplay);
//     }
//     break;
//   } else {
//     alert("Elemento inválido");
//   }
// }
// let num = 0;
// for (let i = 1; i <= 100; i++) {
//   num += i;
//   console.log(num);
// }
let figura = 0;
let lado = 0;
let base = 0;
let altura = 0;
let area = 0;
alert("Bienvenid@ al programa de calculadora de área");
do {
  figura = parseInt(
    prompt(
      "¿De qué figura desea conocer el área?\n1 - Cuadrado\n2 - Rectángulo\n3 - Triángulo"
    )
  );
  switch (figura) {
    case 1:
      do {
        lado = parseFloat(prompt("¿Cuánto mide cada lado del cuadrado?"));
        if (!isNaN(lado)) {
          area = lado ** 2;
          alert("El área del cuadrado es " + area);
          break;
        } else {
          alert("Valor inválido");
        }
      } while (isNaN(lado));
      break;
    case 2:
      do {
        base = parseFloat(prompt("¿Cuánto mide la base del rectángulo?"));
        altura = parseFloat(prompt("¿Cuál es la altura del rectángulo?"));
        if (!isNaN(base) && !isNaN(altura)) {
          area = base * altura;
          alert("El área del rectángulo es " + area);
          break;
        } else {
          alert("Valor inválido");
        }
      } while (isNaN(base) || isNaN(altura));
      break;
    case 3:
      do {
        base = parseFloat(prompt("¿Cuánto mide la base del triángulo?"));
        altura = parseFloat(prompt("¿Cuál es la altura del triángulo?"));
        if (!isNaN(base) && !isNaN(altura)) {
          area = base * altura;
          alert("El área del triángulo es " + area);
          break;
        } else {
          alert("Valor inválido");
        }
      } while (isNaN(base) || isNaN(altura));
      break;
    default:
      alert("Valor inválido");
  }
} while (isNaN(figura));
