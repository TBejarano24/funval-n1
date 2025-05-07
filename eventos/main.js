// let titulo = document.getElementById("idTitulo");
// console.log(titulo);
// let miniTitulo = document.getElementsByClassName("miniTitulo");
// console.log(miniTitulo);

// //De preferencia
// let superTitulo = document.querySelector(".miniTitulo");
// console.log(superTitulo);

// let selectorAll = document.querySelectorAll(".miniTitulo");
// console.log(selectorAll);

// let contador = 0;

// let boton = document.querySelector("#btn");
// boton.addEventListener("click", function () {
//   contador++;
//   titulo.textContent = "HICISTE CLICK";
//   document.body.innerHTML += `<img src="https://media.tenor.com/sJz2zSOUK3oAAAAe/pointing-finger.png" alt="meme">`;
// });

// let titulo = document.querySelector("#idTitulo");
// let boton = document.querySelector("#btn");

// boton.addEventListener("click", function () {
//   if (titulo.classList.contains("day")) {
//     titulo.classList.remove("day");
//     boton.classList.remove("day");
//     titulo.classList.add("night");
//     boton.classList.add("night");
//     titulo.textContent = "Ah, se hizo de noche";
//     boton.textContent = "Fiona es una ogro";
//   } else if (titulo.classList.contains("night")) {
//     titulo.classList.remove("night");
//     boton.classList.remove("night");
//     titulo.classList.add("day");
//     boton.classList.add("day");
//     titulo.textContent = "Que lindo Día!";
//     boton.textContent = "Fiona es humana";
//   }
// });

let titulo = document.querySelector("#idTitulo");
let boton = document.querySelector("#btn");
let imagen = document.querySelector("#imagen");

let dia = true;

boton.addEventListener("click", function () {
  if (dia) {
    titulo.textContent = "Ah, se hizo de noche";
    titulo.style.color = "#33ca1f";
    titulo.style.backgroundColor = "#8f400b";
    boton.textContent = "Fiona es una ogro";
    imagen.setAttribute(
      "src",
      "https://i.pinimg.com/474x/f2/33/62/f23362ccf05748657d6d2a1aa556df06.jpg"
    );
    imagen.setAttribute("width", "190px");
  } else {
    titulo.textContent = "Que lindo Día!";
    titulo.style.color = "#ffbc02";
    titulo.style.backgroundColor = "#7c7cff";
    boton.textContent = "Fiona es humana";
    imagen.setAttribute(
      "src",
      "https://i.pinimg.com/originals/3b/16/6d/3b166d87ffa3e065d03e0c34e42e1281.jpg"
    );
    imagen.setAttribute("width", "100px");
  }
  dia = !dia;
});

let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let data = new FormData(formulario);
  if (data.get("usuario") === "") {
    alert("Ingrese un nombre de usuario válido");
  } else if (
    data.get("edad") < 18 ||
    data.get("pais").toLowerCase() !== "chile"
  ) {
    alert("jajaja, te quedaste sin el GTA IV");
  } else {
    alert("Comprate el GTA IV crack");
  }
});

let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("mouseover", function (evento) {
  botoncito.style.backgroundColor = "gray";
});
botoncito.addEventListener("mouseout", function (evento) {
  botoncito.style.backgroundColor = "";
});

let cajita = document.querySelector("#caja");
let coordenadas = document.querySelector("#coordenadas");

cajita.addEventListener("mousemove", function (evento) {
  coordenadas.textContent = `Coordenadas ${evento.clientX},${evento.clientY}`;
});

let nombreInput = document.querySelector("#nombreInput");
let contador = document.querySelector("#contador");

let index = 0;

nombreInput.addEventListener("keyup", function (evento) {
  console.log(evento.target.value);
  index = evento.target.value.length;
  contador.textContent = `Contador: ${index}`;
});

let listaPelis = [
  "Titanes del Pacífico",
  "Venom",
  "Alita",
  "Un Lugar En Silencio",
  "La Niebla",
  "La Llegada",
  "Fragmentado",
  "Sexto Sentido",
  "Milagros Inesperados",
  "Gladiador",
  "Cloverfield",
  "Nomadland",
  "Barbie",
  "El Hombre del Norte",
];

let filtroBusqueda = document.querySelector("#filtroBusqueda");

let listaHtml = document.querySelector("#ulElement");
for (item of listaPelis) {
  listaHtml.innerHTML += `
  <li class="movieItem">${item}</li>
  `;
}

let pelis = document.querySelectorAll(".movieItem");

filtroBusqueda.addEventListener("keyup", function (event) {
  for (movie of pelis) {
    console.log(event.target.value);
    if (movie.textContent.toLowerCase().includes(event.target.value)) {
      movie.style.display = "list-item";
    } else {
      movie.style.display = "none";
    }
  }
});

const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "Rojo",
  kilometraje: 15000,
  combustible: "Híbrido",
  transmisión: "Automática",
  precio: 25000,
  dueñosAnteriores: ["Juan Pérez", "Ana Gómez"],
  especificaciones: {
    motor: {
      tipo: "4 cilindros",
      potencia: "140 HP",
      torque: "190 Nm",
    },
    seguridad: {
      airbags: 8,
      frenosABS: true,
      controlEstabilidad: true,
    },
    dimensiones: {
      largo: "4.63 m",
      ancho: "1.78 m",
      altura: "1.45 m",
    },
  },
  opciones: ["Asientos de cuero", "Pantalla táctil", "Cámara de reversa"],
  historialMantenimiento: [
    {
      fecha: "10/03/2023",
      servicio: "Cambio de aceite",
      costo: 120,
    },
    {
      fecha: "15/07/2023",
      servicio: "Rotación de llantas",
      costo: 50,
    },
  ],
};

const autoRobado = { ...auto, concesionaria: "Pepito" };
console.log(autoRobado);
