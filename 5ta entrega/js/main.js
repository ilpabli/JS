// Creo la clase constructora
class ClasesCross {
  constructor(id, nombre, precio, dia, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.dia = dia;
    this.img = img;
  }
}

// Creo los objetos que voy a utilizar
const crosstraining = new ClasesCross(
  1,
  "Crossfit",
  600,
  "Lunes a Viernes",
  "crossfit.jpg"
);
const funcional = new ClasesCross(
  2,
  "Funcional",
  600,
  "Lunes a Viernes",
  "funcional.jpg"
);
const remoybici = new ClasesCross(
  3,
  "Remo y Bicicleta",
  500,
  "Miercoles",
  "remoybici.jpg"
);
const oly = new ClasesCross(
  4,
  "Levantamiento Olimpico",
  700,
  "Jueves",
  "oly.jpg"
);
const mobility = new ClasesCross(5, "Mobility", 500, "Lunes", "mobility.jpg");
const skills = new ClasesCross(
  6,
  "Skills",
  1000,
  "Martes y Jueves",
  "skills.jpg"
);
const gymnastics = new ClasesCross(
  7,
  "Gymnastics",
  1000,
  "Lunes a Viernes",
  "gymnastics.jpg"
);

// Creo mi array vacio
const carritoClases = [];

// Creo mis variables para imprimir por HTML

const printTotal = document.getElementById("total");
const printcarritoClases = document.getElementById("clases");

// Ejecuto mi funcion principal
seleccionDeClases();

// Creo mi funcion principal
function seleccionDeClases() {
  let ingresaOpcion = parseFloat(
    prompt(
      "Selecciona una clase \n 1 - Crossfit \n 2 - Funcional \n 3 - Remo y Bicicleta \n 4 - Oly \n 5 - Mobility \n 6 - Skills \n 7 - Gymnastics \n 8 - Salir"
    )
  );
  if (isNaN(ingresaOpcion)) {
    alert("No es una opcion valida");
    seleccionDeClases();
  } else {
    let existe = false;
    switch (ingresaOpcion) {
      case 1:
        existe = noDuplicados("Crossfit");
        if (existe === true) {
          alert("Ya tenes esta clase agregada!");
          seleccionDeClases();
          break;
        } else if (existe === false) {
          carritoClases.push(crosstraining);
          console.log("Elegiste la clase " + crosstraining.nombre);
          sigueSeleccion();
          break;
        }
      case 2:
        existe = noDuplicados("Funcional");
        if (existe === true) {
          alert("Ya tenes esta clase agregada!");
          seleccionDeClases();
          break;
        } else if (existe === false) {
          carritoClases.push(funcional);
          console.log("Elegiste la clase " + funcional.nombre);
          sigueSeleccion();
          break;
        }
      case 3:
        existe = noDuplicados("Remo y Bicicleta");
        if (existe === true) {
          alert("Ya tenes esta clase agregada!");
          seleccionDeClases();
          break;
        } else if (existe === false) {
          carritoClases.push(remoybici);
          console.log("Elegiste la clase " + remoybici.nombre);
          sigueSeleccion();
          break;
        }
      case 4:
        existe = noDuplicados("Levantamiento Olimpico");
        if (existe === true) {
          alert("Ya tenes esta clase agregada!");
          seleccionDeClases();
          break;
        } else if (existe === false) {
          carritoClases.push(oly);
          console.log("Elegiste la clase " + oly.nombre);
          sigueSeleccion();
          break;
        }
      case 5:
        existe = noDuplicados("Mobility");
        if (existe === true) {
          alert("Ya tenes esta clase agregada!");
          seleccionDeClases();
          break;
        } else if (existe === false) {
          carritoClases.push(mobility);
          console.log("Elegiste la clase " + mobility.nombre);
          sigueSeleccion();
          break;
        }
      case 6:
        existe = noDuplicados("Skills");
        if (existe === true) {
          alert("Ya tenes esta clase agregada!");
          seleccionDeClases();
          break;
        } else if (existe === false) {
          carritoClases.push(skills);
          console.log("Elegiste la clase " + skills.nombre);
          sigueSeleccion();
          break;
        }
      case 7:
        existe = noDuplicados("Gymnastics");
        if (existe === true) {
          alert("Ya tenes esta clase agregada!");
          seleccionDeClases();
          break;
        } else if (existe === false) {
          carritoClases.push(gymnastics);
          console.log("Elegiste la clase " + gymnastics.nombre);
          sigueSeleccion();
          break;
        }
      case 8:
        sumaTotal();
        break;
      default:
        alert("No ingresaste una opcion listada");
        seleccionDeClases();
    }
  }
}

// Creo una funcion que me devuelve un true o false si existe en el array el input
function noDuplicados(input) {
  const existe = carritoClases.some((element) => {
    return element.nombre === input;
  });
  return existe;
}

// Creo una funcion con un bucle para reutilizar en la seleccion
function sigueSeleccion() {
  for (let i = 0; i < 3; i++) {
    let sigue = parseFloat(
      prompt("Quieres agregar otra clase? \n 1 - Si \n 2 - No")
    );
    if (sigue == 1) {
      seleccionDeClases();
      break;
    } else if (isNaN(sigue)) {
      alert("No es una opcion valida");
    } else if (sigue == 2) {
      sumaTotal();
      break;
    }
    if (i === 2) {
      console.log("Algo estas tecleando mal");
    }
  }
}

// Al salir de la funcion sigueSeleccion me suma el total
function sumaTotal() {
  const total = carritoClases.reduce((acc, element) => {
    return acc + element.precio;
  }, 0);
  if (total === 0) {
    console.log("Tienes el carrito vacio");
    alert("No agregaste ninguna clase");
  } else {
    console.log("Vas a abonar $" + total);
    printTotal.innerHTML = `Vas abonar el total de: $${total}`;
    printTotal.className = "fw-bolder total p-3 rounded";
  }
}

// Con el forEach recorro todo el array del carrito y por cada vuelta imprimo
// una card de bootstrap con la clase seleccionada.

carritoClases.forEach((element) => {
  let div = document.createElement("div");
  div.className = "col my-2";
  div.innerHTML = `
  <div class="card" style="width: 320px;">
  <img src="../img/${element.img}" class="card-img-top" alt="ejercicio${element.nombre}">
  <div class="card-body">
    <p class="card-text fw-semibold">${element.nombre}<br>Los dias: ${element.dia}<br>Precio de la clase: $${element.precio}</p>
  </div>
</div>`;
  printcarritoClases.append(div);
  console.log(element);
});
