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
let nota = parseFloat(prompt("¿Cuál fue su nota?"));
if (!isNaN(nota)) {
  if (nota >= 0 && nota <= 10) {
    alert("Desaprobado");
  } else if (nota >= 11 && nota <= 13) {
    alert("Regular");
  } else if (nota >= 14 && nota <= 17) {
    alert("Bueno");
  } else if (nota >= 18 && nota <= 20) {
    alert("Excelente");
  } else {
    alert("Nota inválida");
  }
} else {
  alert("Nota inválida");
}
