// //El programa pedirá al usuario la medida de un lado del cuadrado y mostrará el resultado por un alerta
// let ladoCuadrado = parseFloat(prompt("¿Cuánto miden los lados del cuadrado?"));
// let areaCuadrado = ladoCuadrado ** 2;
// alert("El área del cuadrado es de: " + areaCuadrado);

/* 
ATM
Vamos a crear un programa que simule una interacción con un ATM
Este debe tener la posibilidad de realizar las siguientes operaciones:
-Depositar
-Retirar
-Ver saldo
-Pagar servicios (opcional)
*/

let montoDepositado = 50000.0;
let tipoOperacion = "";
let monto = 0;
let reinicio = true;
let idioma = 0;

alert("Bienvenid@ al servicio de ATM\nWelcome to the ATM service");
while (idioma !== 1 && idioma !== 2) {
  idioma = parseInt(
    prompt("Escoja su idioma\nChoose your language\n1-Español 2-English")
  );
}
if (idioma === 1) {
  while (reinicio === true) {
    let reinicioUsuario = 0;
    tipoOperacion = parseInt(
      prompt(
        "¿Qué operación desea realizar? (1-Depositar 2-Retirar 3-Ver Saldo 4-Salir)"
      )
    );

    if (tipoOperacion === 1) {
      monto = parseFloat(prompt("Ingrese el monto a depositar"));
      alert("Se han depositado exitosamente $" + monto);
      montoDepositado += monto;
      alert("Cantidad total depositada: $" + montoDepositado);
      while (reinicioUsuario !== 1 && reinicioUsuario !== 2) {
        reinicioUsuario = parseInt(
          prompt("¿Desea realizar otra operación? 1-Sí 2-No")
        );
        if (reinicioUsuario === 1) {
          reinicio = true;
        } else if (reinicioUsuario === 2) {
          reinicio = false;
        } else {
          alert("Opción inválida");
        }
      }
    } else if (tipoOperacion === 2) {
      monto = prompt("Ingrese el monto a retirar");
      montoDepositado -= monto * 0.05;
      alert(
        "Se han retirado $" +
          monto +
          " de su cuenta más un 5% del monto retirado ($" +
          monto * 0.05 +
          ")"
      );
      alert("Cantidad total depositada: $" + montoDepositado);
      while (reinicioUsuario !== 1 && reinicioUsuario !== 2) {
        reinicioUsuario = parseInt(
          prompt("¿Desea realizar otra operación? 1-Sí 2-No")
        );
        if (reinicioUsuario === 1) {
          reinicio = true;
        } else if (reinicioUsuario === 2) {
          reinicio = false;
        } else {
          alert("Opción inválida");
        }
      }
    } else if (tipoOperacion === 3) {
      alert("Cantidad total depositada: $" + montoDepositado);
      while (reinicioUsuario !== 1 && reinicioUsuario !== 2) {
        reinicioUsuario = parseInt(
          prompt("¿Desea realizar otra operación? 1-Sí 2-No")
        );
        if (reinicioUsuario === 1) {
          reinicio = true;
        } else if (reinicioUsuario === 2) {
          reinicio = false;
        } else {
          alert("Opción inválida");
        }
      }
    } else if (tipoOperacion === 4) {
      break;
    } else {
      alert("Opción inválida");
    }
  }
  alert("¡Que tenga buen día!");
} else if (idioma === 2) {
  while (reinicio === true) {
    let reinicioUsuario = 0;
    tipoOperacion = parseInt(
      prompt(
        "Which operation do you wish to do? (1-Deposit 2-Withdraw 3-Balance 4-Exit)"
      )
    );

    if (tipoOperacion === 1) {
      monto = parseFloat(prompt("Ingrese el monto a depositar"));
      alert("$" + monto + " were succesfully depositted");
      montoDepositado += monto;
      alert("Balance: $" + montoDepositado);
      while (reinicioUsuario !== 1 && reinicioUsuario !== 2) {
        reinicioUsuario = parseInt(
          prompt("Do you wish to perform another operation? 1-Yes 2-No")
        );
        if (reinicioUsuario === 1) {
          reinicio = true;
        } else if (reinicioUsuario === 2) {
          reinicio = false;
        } else {
          alert("Invalid Operation");
        }
      }
    } else if (tipoOperacion === 2) {
      monto = prompt("Enter the amount to withdraw");
      montoDepositado -= monto * 0.05;
      alert(
        "$" +
          monto +
          " were withdrawn from your account plus a 5% of the withdrawn amount ($" +
          monto * 0.05 +
          ")"
      );
      alert("Balance: $" + montoDepositado);
      while (reinicioUsuario !== 1 && reinicioUsuario !== 2) {
        reinicioUsuario = parseInt(
          prompt("Do you wish to perform another operation? 1-Yes 2-No")
        );
        if (reinicioUsuario === 1) {
          reinicio = true;
        } else if (reinicioUsuario === 2) {
          reinicio = false;
        } else {
          alert("Invalid Option");
        }
      }
    } else if (tipoOperacion === 3) {
      alert("Balance: $" + montoDepositado);
      while (reinicioUsuario !== 1 && reinicioUsuario !== 2) {
        reinicioUsuario = parseInt(
          prompt("Do you wish to perform another operation? 1-Yes 2-No")
        );
        if (reinicioUsuario === 1) {
          reinicio = true;
        } else if (reinicioUsuario === 2) {
          reinicio = false;
        } else {
          alert("Invalid Option");
        }
      }
    } else if (tipoOperacion === 4) {
      break;
    } else {
      alert("Invalid Option");
    }
  }
  alert("Have a nice day!");
} else {
  alert("Opción inválida\nInvalid Option");
}
