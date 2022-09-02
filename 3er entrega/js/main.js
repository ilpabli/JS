// Creo la clase constructora
class ClasesCross {
  constructor(id, nombre, precio, dia) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.dia = dia;
  }
}

// Creo los objetos que voy a utilizar
const crosstraining = new ClasesCross(1, "Crossfit", 600, "Lunes a viernes");
const funcional = new ClasesCross(2, "Funcional", 600, "Lunes a viernes");
const remoybici = new ClasesCross(3, "Remo y Bicicleta", 500, "Miercoles");
const oly = new ClasesCross(4, "Levantamiento Olimpico", 700, "Jueves");
const mobility = new ClasesCross(5, "Mobility", 500, "Lunes");
const skills = new ClasesCross(6, "Skills", 1000, "Martes y Jueves");
const gymnastic = new ClasesCross(7, "Gymnastic", 1000, "Lunes a viernes");

// Creo mi array vacio
const carritoClases = [];

// Ejecuto mi funcion principal
seleccionDeClases();

// Creo mi funcion principal
function seleccionDeClases() {
  let ingresaOpcion = parseFloat(
    prompt(
      "Selecciona una clase \n 1 - Crossfit \n 2 - Funcional \n 3 - Remo y Bicicleta \n 4 - Oly \n 5 - Mobility \n 6 - Skills \n 7 - Gymnastic"
    )
  );
  let sigue = 0;
  if (isNaN(ingresaOpcion)) {
    alert("No es una opcion valida");
    seleccionDeClases();
  } else {
    switch (ingresaOpcion) {
      case 1:
        carritoClases.push(crosstraining);
        console.log("Elegiste la clase " + crosstraining.nombre);
        sigue = parseFloat(
          prompt("Quieres agregar otra clase? \n 1 - Si \n 2 - No")
        );
        if (sigue == 1) {
          seleccionDeClases();
          break;
        } else {
          sumaTotal();
          break;
        }
      case 2:
        carritoClases.push(funcional);
        console.log("Elegiste la clase " + funcional.nombre);
        sigue = parseFloat(
          prompt("Quieres agregar otra clase? \n 1 - Si \n 2 - No")
        );
        if (sigue == 1) {
          seleccionDeClases();
          break;
        } else {
          sumaTotal();
          break;
        }
      case 3:
        carritoClases.push(remoybici);
        console.log("Elegiste la clase " + remoybici.nombre);
        sigue = parseFloat(
          prompt("Quieres agregar otra clase? \n 1 - Si \n 2 - No")
        );
        if (sigue == 1) {
          seleccionDeClases();
          break;
        } else {
          sumaTotal();
          break;
        }
      case 4:
        carritoClases.push(oly);
        console.log("Elegiste la clase " + oly.nombre);
        sigue = parseFloat(
          prompt("Quieres agregar otra clase? \n 1 - Si \n 2 - No")
        );
        if (sigue == 1) {
          seleccionDeClases();
          break;
        } else {
          sumaTotal();
          break;
        }
      case 5:
        carritoClases.push(mobility);
        console.log("Elegiste la clase " + mobility.nombre);
        sigue = parseFloat(
          prompt("Quieres agregar otra clase? \n 1 - Si \n 2 - No")
        );
        if (sigue == 1) {
          seleccionDeClases();
          break;
        } else {
          sumaTotal();
          break;
        }
      case 6:
        carritoClases.push(skills);
        console.log("Elegiste la clase " + skills.nombre);
        sigue = parseFloat(
          prompt("Quieres agregar otra clase? \n 1 - Si \n 2 - No")
        );
        if (sigue == 1) {
          seleccionDeClases();
          break;
        } else {
          sumaTotal();
          break;
        }
      case 7:
        carritoClases.push(gymnastic);
        console.log("Elegiste la clase " + gymnastic.nombre);
        sigue = parseFloat(
          prompt("Quieres agregar otra clase? \n 1 - Si \n 2 - No")
        );
        if (sigue == 1) {
          seleccionDeClases();
          break;
        } else {
          sumaTotal();
          break;
        }
    }
  }
}

// Al salir de la funcion principal me suma las clases
function sumaTotal() {
  const total = carritoClases.reduce((acc, element) => {
    return acc + element.precio;
  }, 0);
  console.log("Vas a abonar $" + total);
  alert("Vas a abonar $" + total);
}

function printClases() {
  document.write(claseaAdquiridas);
}

// Creo un mapa con las clases adquiridas
const claseaAdquiridas = carritoClases.map((element) => {
  return element.nombre;
});

// Con un for of recorro todo el carrito para ver que tengo cargado
for (const element of carritoClases) {
  console.log(element);
}
