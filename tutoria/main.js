const cursos = [
  {
    nombre: "Programación Web",
    profesor: "Kevin",
    estudiantes: [
      { nombre: "Ana", nota: 8 },
      { nombre: "Luis", nota: 6 },
      { nombre: "Sofía", nota: 9 },
      { nombre: "Carlos", nota: 7 },
    ],
  },
  {
    nombre: "Bases de Datos",
    profesor: "Diego",
    estudiantes: [
      { nombre: "Pedro", nota: 5 },
      { nombre: "Sofía", nota: 7 },
      { nombre: "Luis", nota: 4 },
      { nombre: "Ana", nota: 6 },
    ],
  },
  {
    nombre: "Diseño UX/UI",
    profesor: "Lucía",
    estudiantes: [
      { nombre: "Ana", nota: 10 },
      { nombre: "Pedro", nota: 6 },
      { nombre: "Valentina", nota: 9 },
      { nombre: "Carlos", nota: 10 },
    ],
  },
  {
    nombre: "Lógica de Programación",
    profesor: "Martín",
    estudiantes: [
      { nombre: "Luis", nota: 5 },
      { nombre: "Cristina", nota: 8 },
      { nombre: "Ricardo", nota: 9 },
      { nombre: "Sofía", nota: 6 },
    ],
  },
  {
    nombre: "JavaScript Intermedio",
    profesor: "Mariana",
    estudiantes: [
      { nombre: "Kevin", nota: 7 },
      { nombre: "Valentina", nota: 8 },
      { nombre: "Pedro", nota: 9 },
      { nombre: "Ana", nota: 10 },
    ],
  },
];

cursos.forEach((element) => {
  element.estudiantes.some((estudiante) => {
    if (estudiante.nombre === "Ana" && element.nombre === "Diseño UX/UI") {
      console.log(
        `Ana está en la clase de ${element.nombre} y tiene nota de: ${estudiante.nota}`
      );
    }
  });
});

// let titulo = document.querySelector("#titulo");
// console.log(titulo);

// titulo.addEventListener("click", function (evento) {
//   titulo.textContent = "chancho";
// });

//BUCLES FOR

/*Perfectos para repetir un código una cierta cantidad
de veces*/

// for (let index = 0; index <= 10; index++) {
//   console.log(index);
// }

/*Pero son mucho mejores para iterar sobre un Array u
otros elementos iterables*/

// let array = ["¡Hola", "gente", "buenas", "tardes!", "¿Todo", "bien?"];

// for (let i = 0; i < array.length; i++) {
//   console.log(i);
//   console.log(array[i]);
// }

/*Los strings también son iterables*/

// let stringLargo = "supercalifragilisticoespialidoso";

// for (let j = 0; j < stringLargo.length; j++) {
//   console.log(j);
//   console.log(stringLargo[j]);
// }

/*Y así se puede hacer también, por ejemplo, con un
Array con objetos*/

// let arrayConObjetos = [
//   { nombre: "Tomas", edad: 20 },
//   { nombre: "Jorge", edad: 47 },
//   { nombre: "Pepito", edad: 11 },
// ];

// for (let k = 0; k < arrayConObjetos.length; k++) {
//   console.log(k);
//   console.log(arrayConObjetos[k].nombre);
// }

//FUNCIONES
/*Ideales para reutilizar código sin tener que volver
a escribirlo entero*/

/*Para declarar una función, se usa la palabra clave
"function", seguido del nombre de la función, un par
de paréntesis y llaves, dentro de las cuales está el
código que se va a ejecutar*/

// function hola() {
//   console.log("Hola mundo!");
// }

/*Las funciones se "llaman" al escribir el nombre de
la función seguido de paréntesis (También se puede
hacer desde la consola)*/

// hola();

/*Algunas funciones también pueden incluir "parámetros"
que básicamente son variables que la función puede usar
durante su ejecución*/

// function saludo(mensaje) {
//   console.log(mensaje);
// }

/*Al llamar a la función, el parámetro pasa a ser un
"argumento". En este caso el argumento es un string
pero también pueden ser variables*/

// saludo("K onda mis chavos");

/*EJERCICIOS CON MÉTODOS*/

// Imprime uno por uno en mayúsculas:
// const nombres = ["Ana", "Luis", "Pedro", "Sofía"];

// Devuelve un nuevo array con los números al cuadrado.
// const numeros = [2, 4, 6, 8];

// Filtra los números mayores a 10 del siguiente array:
// const valores = [5, 12, 8, 130, 44];

//Suma todos los valores de este array:
// const nums = [1, 2, 3, 4, 5];
// let sumanumeros = nums.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(sumanumeros);

// function reduceCopia(array, valorInicial = 0) {
//   let acumulador = valorInicial;
//   for (let i = 0; i < array.length; i++) {
//     acumulador += array[i];
//   }
//   return acumulador;
// }

// console.log(reduceCopia(nums));

// function primerOrden(){}

// Encuentra el primer número mayor a 50 en el siguiente array:
// const datos = [10, 25, 55, 40, 90];

// Tienes un array de objetos con productos. Haz lo siguiente:
// Filtra los productos con precio mayor a 20.
// Usa .map() para obtener solo sus nombres.
// const productos = [
//   { nombre: "Camiseta", precio: 25 },
//   { nombre: "Pantalón", precio: 15 },
//   { nombre: "Zapatos", precio: 50 },
// ];

// Dado un array de objetos con personas y sus edades, calcula la suma total de edades:
// const personas = [
//   { nombre: "Carlos", edad: 30 },
//   { nombre: "María", edad: 25 },
//   { nombre: "Elena", edad: 35 },
// ];
