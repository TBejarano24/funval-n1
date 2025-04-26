//Objeto con los productos y sus precios originales
const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];

//Mostrando en consola los productos y sus precios
console.log("Productos disponibles:");
for (let i = 0; i < productos.length; i++) {
  console.log(`${productos[i].nombre} - Precio: $${productos[i].precio}`);
}

//Creando un array que sólo contiene los nombres de los productos disponibles
let productosDisponibles = productos.map((productos) => {
  return productos.nombre;
});

//Mostrando en consola el array creado en el segmento anterior
console.log(productosDisponibles);

//Mostrando en consola si acaso un Monitor se encuentra entre los productos disponibles}
let busqueda = "CHANCHO";
if (
  productosDisponibles
    .map((x) => {
      return x.toLowerCase();
    })
    .includes(busqueda.toLowerCase())
) {
  console.log(`${busqueda} se encuentra entre los productos disponibles`);
} else {
  console.log(`${busqueda} no se encuentra entre los productos disponibles`);
}

//Creando un objeto con todos los productos disponibles pero con el precio modificado (descuento del 10%)
let productosDescuento = productos.map((productos) => {
  let auxiliar = {};
  auxiliar.nombre = productos.nombre;
  auxiliar.precio = productos.precio * 0.9;
  return auxiliar;
});

//Mostrando en consola el objeto creado en el segmento anterior
console.log(productosDescuento);

//Creando un objeto con todos los productos cuyo precio sea menor o igual a 100
let precioMenorCien = productos.filter((productos) => {
  if (productos.precio <= 100) {
    return productos.precio;
  }
});

//Mostrando en consola el objeto creado en el segmento anterior
console.log(precioMenorCien);

//Creando un objeto que sólo contenga los dos primeros productos de la lista
let primerosDosProductos = productos.slice(0, 2);

//Mostrando en consola el objeto creado en el segmento anterior
console.log(primerosDosProductos);

//Creando un objeto que contenga todos los productos ordenados de menor a mayor precio
let productosOrdenadosPorPrecio = productos.sort((a, b) => {
  return a.precio - b.precio;
});

//Mostrando en consola el objeto creado en el segmento anterior
console.log(productosOrdenadosPorPrecio);

//Creando un objeto que contenga todos los productos en orden invertido
let productosInvertidos = [...productos].reverse();

//Mostrando en consola el objeto creado en el segmento anterior
console.log(productosInvertidos);
