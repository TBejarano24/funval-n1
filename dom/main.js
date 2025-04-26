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
  // Método para calcular depreciación
  calcularDepreciacion: function (añoActual) {
    return this.precio * 0.9 ** (añoActual - this.año);
  },
};

let datosAuto = auto.map((x) => x.keys);
console.log(datosAuto);

let tabla = document.getElementById("fichaTecnica");
tabla.innerHTML = `
<tr>
    <th colspan="2">Información General</th>
</tr>
<tr>
    <th>${a}</th>
</tr>
`;
