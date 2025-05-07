// let nombres = ["Pedro", "Juan", "Cristian", "Kevin", "Tomas", "Rodrigo"];

// let listaNombres = document.querySelector("#listaNombres");

// listaNombres.innerHTML = "";

// nombres.forEach((nombre) => {
//   listaNombres.innerHTML += `
//     <li>
//         ${nombre}<button class="aprobado">X</button>
//     </li>
//     `;
// });

// listaNombres.addEventListener("click", function (evento) {
//   console.log(evento.target);
//   if (evento.target.classList.contains("aprobado")) {
//     let itemListaPadre = evento.target.closest("li");
//     itemListaPadre.textContent = `EL ESTUDIANTE HA APROBADO`;
//   }
// });

// let estudiantes = [
//   {
//     name: "Cristian",
//     cel: 77207634,
//     pais: "Bolivia",
//   },
//   {
//     name: "Tomas",
//     cel: 271236323,
//     pais: "Argentina",
//   },
//   {
//     name: "Gino",
//     cel: 3220762,
//     pais: "Chile",
//   },
//   {
//     name: "Ana",
//     cel: 98762235,
//     pais: "Argentina",
//   },
//   {
//     name: "Kevin",
//     cel: 86243207634,
//     pais: "Mexico",
//   },
//   {
//     name: "Milton",
//     cel: 89712350,
//     pais: "Uruguay",
//   },
//   {
//     name: "Ricardo",
//     cel: 123987523,
//     pais: "Mexico",
//   },
//   {
//     name: "Rodrigo",
//     cel: 77207634,
//     pais: "Narnia",
//   },
// ];

// let cuerpoTabla = document.querySelector("#cuerpoTabla");

// cuerpoTabla.innerHTML = "";

// estudiantes.forEach((estudiante) => {
//   cuerpoTabla.innerHTML += `
//             <tr>
//                 <td class="nombreEstudiante">${estudiante.name}</td>
//                 <td>${estudiante.cel}</td>
//                 <td>${estudiante.pais}</td>
//                 <td><button class="eliminar">ELIMINAR</button></td>
//             </tr>
//     `;
// });

// cuerpoTabla.addEventListener("click", function (evento) {
//   if (evento.target.classList.contains("eliminar")) {
//     let filaTabla = evento.target.closest("tr");
//     console.log(
//       `Se ha eliminado a ${
//         filaTabla.querySelector(".nombreEstudiante").textContent
//       } del listado`
//     );
//     filaTabla.innerHTML = "";
//   }
// });

const usuarios = [
  { id: 1, nombre: "Ana", roles: ["admin"] },
  { id: 2, nombre: "Gino", roles: ["user"] },
  { id: 3, nombre: "Cristian", roles: ["admin", "user"] },
];

let soloAdmins = filtrarAdmin(usuarios);
console.log(soloAdmins);

function filtrarAdmin(iter) {
  
}
