// let traerDatos = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         nombre: "kevin",
//         edad: 28,
//       },
//       {
//         nombre: "ana",
//         edad: 20,
//       },
//       {
//         nombre: "Cristian",
//         edad: 30,
//       },
//     ]);
//   }, 5000); // 2 segundos de retraso
// });
// traerDatos.then((item) => {
//   console.log("Datos recibidos:");
//   console.log(item);
//   let objetos = item;
//   objetos.forEach((element) => {
//     console.log(element.nombre);
//   });
// });
//---------------------------
// console.log("Huelo a patas");
// console.log("Me tengo que bañar");
// console.log("Hace frío");
// console.log("Voy al baño");
// console.log("Lleno el calefón con agua");
// console.log("Enchufo el calefón para calentar el agua");
// setTimeout(() => {
//   console.log("El agua está lista");
//   console.log("Me baño");
//   setTimeout(() => {
//     console.log("Quedo facha");
//   }, 10000);
// }, 15000);
// console.log("Veo videos de monos mientras espero...");
//---------------------------
// let promesa = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(["Plata", "Más plata", "Y más plata"]);
//   }, 7000);
// });
//---------------------------
// function obtenerUsuarios() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const exito = true;
//       if (exito) {
//         resolve([
//           { nombre: "Juan", edad: 25 },
//           { nombre: "María", edad: 30 },
//           { nombre: "Pedro", edad: 17 },
//         ]);
//       } else {
//         reject("No se pudieron obtener los usuarios");
//       }
//     }, 5000);
//   });
// }
//muestren solo los nombres de las personas mayores a 18 años
//---------------------------
// function obtenerProductos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const exito = true;
//       if (exito) {
//         resolve([
//           { nombre: "Laptop", precio: 1200, stock: 5 },
//           { nombre: "Celular", precio: 800, stock: 0 },
//           { nombre: "Monitor", precio: 300, stock: 3 },
//           { nombre: "Teclado", precio: 50, stock: 10 },
//         ]);
//       } else {
//         reject("Error al obtener los productos del servidor.");
//       }
//     }, 3000);
//   });
// }

// obtenerProductos()
//   .then((item) => {
//     console.log("Productos Disponibles:");
//     let filteredItem = item.filter((element) => element.stock > 0);
//     filteredItem.forEach((product) => {
//       console.log(`${product.nombre}: $${product.precio}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//---------------------------
// let libros = [
//   {
//     titulo: "harry potter",
//     año: 2002,
//     autor: "JK ROWLING",
//   },
//   {
//     titulo: "jesus el cristo",
//     año: 1987,
//     autor: "Talmage James",
//   },
//   {
//     titulo: "la arrogancia fatal",
//     año: 1988,
//     autor: "Federick Haiek",
//   },
// ];
// function fetchLibros() {
//   return new Promise((resolve, reject) => {
//     let cumplio = true;
//     if (cumplio) {
//       setTimeout(() => {
//         resolve(libros);
//       }, 8000);
//     } else {
//       reject("los libros no pudieron ser extraidos ");
//     }
//   });
// }
//---------------------------
const usuarios = [
  {
    id: 1,
    nombre: "Ana",
    edad: 28,
    librosFavoritos: ["1984", "Cien años de soledad"],
    historialCompras: [
      {
        fecha: "2024-02-12",
        libros: ["1984", "Rebelión en la granja"],
      },
      {
        fecha: "2025-01-01",
        libros: ["Cien años de soledad"],
      },
    ],
  },
  {
    id: 2,
    nombre: "Luis",
    edad: 34,
    librosFavoritos: ["La naranja mecánica"],
    historialCompras: [
      {
        fecha: "2023-12-10",
        libros: ["La naranja mecánica", "El extranjero"],
      },
    ],
  },
  {
    id: 3,
    nombre: "Carla",
    edad: 21,
    librosFavoritos: [],
    historialCompras: [],
  },
];

function fetchUsuarios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usuarios);
    }, 1000);
  });
}

async function booksData() {
  try {
    let data = await fetchLibros();
    let filteredData = data.filter((book) => book.año >= 2000);
    filteredData.forEach((element) => {
      console.log(element.autor);
    });
  } catch (error) {
    console.log(error);
  }
}
