let saldoDisponible = 50000;
let operacion = NaN;
let reiniciar = false;
function cuentaBancaria() {
  alert("Bienvenid@ al sistema web de Cuenta Bancaria");
  do {
    do {
      operacion = parseInt(
        prompt(
          "¿Qué operación? desea realizar\n1 - Ingresar dinero\n2 - Retirar dinero\n3 - Consultar saldo\n4 - Salir"
        )
      );
      switch (operacion) {
        case 1:
          saldoDisponible += ingresarDinero();
          alert("Saldo disponible: $" + saldoDisponible);
          break;
        case 2:
          saldoDisponible -= retirarDinero();
          alert("Saldo disponible: $" + saldoDisponible);
          break;
        case 3:
          consultarSaldo();
          break;
        case 4:
          reiniciar = false;
          break;
        default:
          alert("Opción inválida");
      }
    } while (isNaN(operacion));
    if (operacion !== 4) {
      if (
        parseInt(
          prompt("¿Desea realizar otra operación?\n1 - Sí\nOtra tecla - No")
        ) === 1
      ) {
        reiniciar = true;
      } else {
        reiniciar = false;
      }
    }
  } while (reiniciar === true);
  alert("¡Que tenga buen día!");
}

function ingresarDinero() {
  do {
    let monto = parseFloat(prompt("Ingrese el monto que desea depositar"));
    if (!isNaN(monto)) {
      return monto;
    } else {
      alert("Valor inválido");
    }
  } while (isNaN(monto));
}
function retirarDinero() {
  do {
    let monto = parseFloat(prompt("Ingrese el monto que desea retirar"));
    if (!isNaN(monto)) {
      return monto;
    } else {
      alert("Valor inválido");
    }
  } while (isNaN(monto));
}
function consultarSaldo() {
  alert("El saldo disponible en su cuenta es de $" + saldoDisponible);
}
