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
const gymnastics = new ClasesCross(7, "Gymnastics", 1000, "Lunes a viernes");

// Creo mi array vacio
const carritoClases = [];

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
        break;
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
  console.log("Vas a abonar $" + total);
  alert("Vas a abonar $" + total);
}

// Creo una funcion que me retorna una variable con las clases obtenidas
function claseAdqui() {
  const adqui = carritoClases.map((element) => {
    return element.nombre;
  });
  return adqui;
}

const clasesAdquiridas = claseAdqui();

// Creo una funcion para imprimir en la pagina web
function printClases() {
  document.write(clasesAdquiridas);
}

// Con un for of recorro todo el carrito para ver que tengo cargado
for (const element of carritoClases) {
  console.log(element);
}
