// function raizCuarta(numero) {
//   let resultado = numero ** 4;
//   return "el resultado es " + resultado;
// }

// console.log(raizCuarta(2));

// function addition(num1, num2) {
//   return num1 + num2;
// }

// function minutesToSeconds(minutes) {
//   return minutes * 60;
// }

// function triArea(base, height) {
//   return (base * height) / 2;
// }

// function lessThan100(num1, num2) {
//     let result = num1 + num2
//     if (result > 100) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(
//   "Call the 'points()' function and add the two-pointers and three-pointers"
// );
// function points(twoPointers, threePointers) {
//   if (!isNaN(twoPointers) && !isNaN(threePointers)) {
//     return twoPointers * 2 + threePointers * 3;
//   } else {
//     console.log("You added invalid values");
//   }
// }

// const legs = function (chickens, cows, pigs) {
//   return chickens * 2 + cows * 4 + pigs * 4;
// };

// console.log(legs(3, 5, 5));

const CALCULAR_AREA = function (figura, ladoOBaseORadio, altura) {
  if (figura.toLowerCase() === "cuadrado") {
    return ladoOBaseORadio ** 2;
  } else if (figura.toLowerCase() === "rectangulo") {
    return ladoOBaseORadio * altura;
  } else if (figura.toLowerCase() === "triangulo") {
    return (ladoOBaseORadio * altura) / 2;
  } else if (figura.toLowerCase() === "circulo") {
    return 3.14159 * ladoOBaseORadio ** 2;
  } else {
    console.log("valores inválidos");
  }
};
