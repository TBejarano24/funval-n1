// let numeros = [1, 2, 3, 4];
// let numerosDuplicados = [];
// for (let i = 0; i < numeros.length; i++) {
//   numerosDuplicados.push(numeros[i] * 2);
// }
// console.log(numeros);
// console.log(numerosDuplicados);

// let numeros = [1, 2, 3, 4, 5, 6];
// let factoriales = [];
// for (let i = 0; i < numeros.length; i++) {
//   let auxiliar = 1;
//   for (let j = 1; j <= numeros[i]; j++) {
//     auxiliar *= j;
//   }
//   factoriales.push(auxiliar);
// }
// console.log(factoriales);

// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let sumaDiagonal = 0;

// for (let i = 0; i < matriz.length; i++) {
//   sumaDiagonal += matriz[i][i];
// }
// console.log(sumaDiagonal);

// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let sumaDiagonal = 0;

// for (let i = 0; i < matriz.length; i++) {
//   for (j = matriz[i].length - 1; j >= 0; j--) {
//     sumaDiagonal += matriz[i][j];
//     console.log(matriz[i][j]);
//   }
// }
// console.log(sumaDiagonal);

// let numeros = [1, 2, 3, 4, 5, 6];
// let numerosMitad = numeros.map((numeros) => numeros * 0.5);
// console.log(numerosMitad);

// let numeros = [3, 11, 15, 4, 2, 17, 8, 10, 22, 7];
// let numerosPares = numeros.filter((numero) => numero % 2 === 0);
// console.log(numerosPares);

// let numeros = [3, 11, 15, 4, 2, 17, 8, 10, 22, 7]

// let nombres = ["Tomas", "tomas", "Jorge", "Rafael"];
// let nombresFiltrados = [];
// nombresFiltrados = nombres.sort();
// console.log(nombresFiltrados);

// let palabras = ["hola", "bye", "marco", "polo", "escuela"];
// let mayusculas = palabras.map((palabra) => palabra.toUpperCase());
// console.log(palabras);
// console.log(mayusculas);

// let objs = [
//   { nombre: "Daniel", edad: 24 },
//   { nombre: "Miguel", edad: 22 },
//   { nombre: "Gustavo", edad: 23 },
//   { nombre: "Domingo", edad: 20 },
// ];

// let soloEdades = objs.map((elemento) => {
//   let auxiliar = {};
//   auxiliar.edad = elemento.edad;
//   return auxiliar;
// });
// console.log(soloEdades);

let objs2 = [
  { nombre: "Daniel", puntos: 74 },
  { nombre: "Miguel", puntos: 22 },
  { nombre: "Gustavo", puntos: 23 },
  { nombre: "Domingo", puntos: 80 },
];

let puntosMasDiez = objs2.map((objs2) => {
  return {
    ...objs2,
    puntos: objs2.puntos > 50 ? objs2.puntos + 10 : objs2.puntos,
  };
});
console.log(puntosMasDiez);
