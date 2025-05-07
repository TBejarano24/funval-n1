// let n = 20;
// let cadena = "";

// for (let i = 1; i <= n + 1; i++) {
//   if (i % 2 === 0) {
//     cadena += `${i} `;
//     n++;
//   } else {
//     continue;
//   }
// }

// console.log(cadena);
//---------------------------
// let n = 3;

// for (let i = 1; i <= n; i++) {
//   console.log(i * 2);
// }
//---------------------------
// let n = 10;
// let cuentaPrimos = 0;

// for (let i = 1; cuentaPrimos < n; i++) {
//   if (i % i === 0 && i % 1 === 0 && i % 2 !== 0) {
//     console.log(i);
//     cuentaPrimos++;
//   } else {
//     continue;
//   }
// }
//---------------------------
// let n = 10;
// let fibonacci = [0, 1];

// for (let i = 0; i < n; i++) {
//   if (n < 2) {
//     fibonacci.pop();
//   } else if (i < 2) {
//     continue;
//   } else {
//     fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
//   }
// }
// console.log(fibonacci);
//---------------------------
// let estudiantes = [
//   {
//     nombre: "Cristian",
//     lenguajes: ["HTML", "CSS", "JS"],
//   },
//   {
//     nombre: "Milton",
//     lenguajes: ["HTML", "CSS", "JS", "python", "JAVA", "C++"],
//   },
//   {
//     nombre: "Ana",
//     lenguajes: ["C#", "JAVA", "PYTHON"],
//   },
// ];

// for (let estudiante of estudiantes) {
//   console.log(
//     `${estudiante.nombre} usa estos lenguajes de programación: ${estudiante.lenguajes}`
//   );
// }
//---------------------------
// estudiantes.forEach((estudiante) => {
//   console.log(estudiante.nombre);
//   estudiante.lenguajes.forEach((lenguaje) => {
//     console.log(lenguaje);
//   });
// });
//---------------------------
// let profesores = [
//   {
//     nombre: "Kevin",
//     estudiantes: ["Gino", "Ana", "Cristian", "Ricardo"],
//   },
//   {
//     nombre: "Diego",
//     estudiantes: ["Milton", "Kevin", "Elias", "Luis"],
//   },
//   {
//     nombre: "Jorge",
//     estudiantes: ["Tomas", "Pedro"],
//   },
// ];

// findTeacher("TOMAS");

// function findTeacher(student) {
//   profesores.forEach((profesor) => {
//     if (
//       profesor.estudiantes
//         .map((estudiante) => estudiante.toLowerCase())
//         .indexOf(student.toLowerCase()) !== -1
//     ) {
//       console.log(`El profesor de ${student} es ${profesor.nombre}`);
//     } else {
//       return;
//     }
//   });
// }
//---------------------------
// const personas = [
//   { nombre: "Ana", edad: 20 },
//   { nombre: "Luis", edad: 25 },
//   { nombre: "Carlos", edad: 17 },
//   { nombre: "Marta", edad: 25 },
// ];

/* Obtener un array con solo los nombres?
Filtrar a los mayores de edad (edad >= 18)?
Encontrar a la primera persona mayor de 25 años?
Calcular la edad total de todos?*/

// let soloNombres = personas.map((persona) => persona.nombre);
// console.log(soloNombres);

// let mayoresEdad = personas.filter((persona) => persona.edad >= 18);
// console.log(mayoresEdad);

// let primeroConVeinticinco = personas.find((persona) => persona.edad >= 25);
// console.log(primeroConVeinticinco);

// let totalEdades = personas.reduce((total, edad) => total + edad.edad, 0);
// console.log(totalEdades);
//---------------------------
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let soloPares = numeros.filter((numero) => numero % 2 === 0);
console.log(soloPares);

const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "María", edad: 15 },
];

// 1. Filtra las personas mayores de 18.
// 2. Suma sus edades y guarda el total.

let sumaMayores = personas.filter((persona) => persona.edad >= 18);
let sumaMayoresDos = sumaMayores.reduce((acumulador, edad) => {
  acumulador + edad.edad;
});
console.log(sumaMayoresDos);
