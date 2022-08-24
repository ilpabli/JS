let sueldoBruto = parseFloat(prompt("Ingresa tu sueldo bruto!"));
let sueldoNeto = descuentoxLey(sueldoBruto);

function descuentoxLey(sueldoB) {
  if (isNaN(sueldoB)) {
    alert("Tenes que ingresar tu sueldo en numeros!!!");
  } else {
    let descuentoTotal = 0;
    let sueldoNeto = 0;
    let input = prompt(
      "Selecciona segun corresponda: \n 1- ¿Pagas aportes sin gremializar? \n 2- ¿Pagas aportes y estas gremializado?"
    );
    switch (input) {
      case "1":
        descuentoTotal = (sueldoB * 19) / 100;
        sueldoNeto = sueldoB - descuentoTotal;
        console.log("Tu sueldo neto es de: $" + sueldoNeto);
        alert(
          "Se te realizo un descuento del 19% y te quedo en mano: $" +
            sueldoNeto
        );
        break;
      case "2":
        descuentoTotal = (sueldoB * 19.5) / 100;
        sueldoNeto = sueldoB - descuentoTotal;
        console.log("Tu sueldo neto es de: $" + sueldoNeto);
        alert(
          "Se te realizo un descuento del 19.5% y te quedo en mano: $" +
            sueldoNeto
        );
        break;
      default:
        alert("Fijate donde pones los dedos!!!");
    }
    return sueldoNeto;
  }
}

function printSueldo() {
  if (isNaN(sueldoNeto)) {
    document.write("Ingresa bien tu sueldo bruto");
  } else if (sueldoNeto === 0) {
    document.write("Algo cargaste mal!");
  } else {
    document.write(sueldoNeto);
  }
}

if (sueldoBruto >= 280000) {
  console.log("Vas a pagar impuesto a la ganancia");
} else if (sueldoBruto < 280000 && sueldoNeto > 1) {
  console.log("Safaste de pagar impuesto a la ganancia");
}
