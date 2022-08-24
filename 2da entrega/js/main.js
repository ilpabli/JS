let sueldoBruto = parseFloat(prompt("Ingresa tu sueldo bruto!"));

function descuentoxLey(sueldoB) {
  if (isNaN(sueldoB)) {
    alert("Tenes que ingresar tu sueldo en numeros!!!");
  } else {
    let input = prompt(
      "Selecciona segun corresponda: \n 1- ¿Pagas aportes sin gremializar? \n 2- ¿Pagas aportes y estas gremializado?"
    );
    switch (input) {
      case "1":
        let descuentoTotal = (sueldoB * 19) / 100;
        let sueldoNeto = sueldoB - descuentoTotal;
        console.log("Tu sueldo neto es de: $" + sueldoNeto);
        alert(
          "Se te realizo un descuento del 19% y te quedo en mano: $" +
            sueldoNeto
        );
        break;
      case "2":
        let descuentoTotalgremial = (sueldoB * 19.5) / 100;
        let sueldoNetogremial = sueldoB - descuentoTotalgremial;
        console.log("Tu sueldo neto es de: $" + sueldoNetogremial);
        alert(
          "Se te realizo un descuento del 19.5% y te quedo en mano: $" +
            sueldoNetogremial
        );
        break;
      default:
        alert("Fijate donde pones los dedos!!!");
    }
  }
}

descuentoxLey(sueldoBruto);
if (sueldoBruto >= 280000) {
  console.log("Vas a pagar impuesto a la ganancia");
}
