function calculadora() {
  let operacion = 0;
  let num1 = 0;
  let num2 = 0;
  let ultimoResultado = 0;
  alert("Bienvenid@ a la calculadora");
  do {
    operacion = parseInt(
      prompt(
        "¿Qué operación desea realizar?\n1 - Suma\n2 - Resta\n3 - Multiplicación\n4 - División"
      )
    );
    switch (operacion) {
      case 1:
        num1 = parseFloat(prompt("Inserte un número"));
        num2 = parseFloat(prompt("Inserte la cantidad a sumar"));
        ultimoResultado = sumar(num1, num2);
        alert("El resultado es " + ultimoResultado);
        break;
      case 2:
        num1 = parseFloat(prompt("Inserte un número"));
        num2 = parseFloat(prompt("Inserte la cantidad a restar"));
        ultimoResultado = restar(num1, num2);
        alert("El resultado es " + ultimoResultado);
        break;
      case 3:
        num1 = parseFloat(prompt("Inserte el multiplicando"));
        num2 = parseFloat(prompt("Inserte el multiplicador"));
        ultimoResultado = multiplicar(num1, num2);
        alert("El resultado es " + ultimoResultado);
        break;
      case 4:
        num1 = parseFloat(prompt("Inserte el dividendo"));
        num2 = parseFloat(prompt("Inserte el divisor"));
        ultimoResultado = dividir(num1, num2);
        alert("El resultado es " + ultimoResultado);
        break;
      default:
        alert("Opción inválida");
    }
    console.log("Último resultado: " + ultimoResultado);
  } while (isNaN(operacion) || operacion < 1 || operacion > 4);
}

function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  return num1 / num2;
}
