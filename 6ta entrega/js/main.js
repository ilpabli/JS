// Creo mi array de objetos que usare como DB
const clasesCross = [
  {
    id: 1,
    nombre: "Crossfit",
    precio: 600,
    dia: "Lunes a Viernes",
    img: "crossfit.jpg",
  },
  {
    id: 2,
    nombre: "Funcional",
    precio: 600,
    dia: "Lunes a Viernes",
    img: "funcional.jpg",
  },
  {
    id: 3,
    nombre: "Remo y Bicicleta",
    precio: 500,
    dia: "Miercoles",
    img: "remoybici.jpg",
  },
  {
    id: 4,
    nombre: "Levantamiento Olimpico",
    precio: 700,
    dia: "Jueves",
    img: "oly.jpg",
  },
  {
    id: 5,
    nombre: "Mobility",
    precio: 500,
    dia: "Lunes",
    img: "mobility.jpg",
  },
  {
    id: 6,
    nombre: "Skills",
    precio: 1000,
    dia: "Martes y Jueves",
    img: "skills.jpg",
  },
  {
    id: 7,
    nombre: "Gymnastics",
    precio: 600,
    dia: "Lunes a Viernes",
    img: "gymnastics.jpg",
  },
];

// Creo mi array carrito vacio
const carritoClases = [];

// Creo una variable para generar las cards
const cards = document.getElementById("cards");

// Creo variable para imprimir el carrito y totales
const printTotal = document.getElementById("total");
const printClases = document.getElementById("clasesAdqui");
const btnCarrito = document.getElementById("btnCarrito");

// Genero las cards desde JS con un bucle
clasesCross.forEach((element) => {
  let div = document.createElement("div");
  div.className = "col my-2";
  div.innerHTML = `
  <div class="card" style="width: 300px;">
  <img src="./img/${element.img}" class="card-img-top" alt="ejercicio${element.nombre}">
  <div class="card-body">
  <h4>${element.nombre}</h4>
    <p class="card-text fw-semibold">Los dias: ${element.dia}<br>Precio de la clase: $${element.precio}</p>
    <button class="btn btn-dark" id=btn${element.id}>Agregar</button>
  </div>
</div>`;
  cards.append(div);
});

// Creo mi variable para capturar los botones
const btn = document.querySelectorAll(".btn");

btn[0].addEventListener("click", () => {
  existe = noDuplicados("Crossfit");
  if (existe === true) {
    console.log("Ya tenes agregada esta clase");
  } else {
    console.log("Agregaste Crossfit");
    carritoClases.push(clasesCross[0]);
    sumaTotal();
  }
});

btn[1].addEventListener("click", () => {
  existe = noDuplicados("Funcional");
  if (existe === true) {
    console.log("Ya tenes agregada esta clase");
  } else {
    console.log("Agregaste Funcional");
    carritoClases.push(clasesCross[1]);
    sumaTotal();
  }
});

btn[2].addEventListener("click", () => {
  existe = noDuplicados("Remo y Bicicleta");
  if (existe === true) {
    console.log("Ya tenes agregada esta clase");
  } else {
    console.log("Agregaste Remo y Bicicleta");
    carritoClases.push(clasesCross[2]);
    sumaTotal();
  }
});

btn[3].addEventListener("click", () => {
  existe = noDuplicados("Levantamiento Olimpico");
  if (existe === true) {
    console.log("Ya tenes agregada esta clase");
  } else {
    console.log("Agregaste Levantamiento Olimpico");
    carritoClases.push(clasesCross[3]);
    sumaTotal();
  }
});

btn[4].addEventListener("click", () => {
  existe = noDuplicados("Mobility");
  if (existe === true) {
    console.log("Ya tenes agregada esta clase");
  } else {
    console.log("Agregaste Mobility");
    carritoClases.push(clasesCross[4]);
    sumaTotal();
  }
});

btn[5].addEventListener("click", () => {
  existe = noDuplicados("Skills");
  if (existe === true) {
    console.log("Ya tenes agregada esta clase");
  } else {
    console.log("Agregaste Skills");
    carritoClases.push(clasesCross[5]);
    sumaTotal();
  }
});

btn[6].addEventListener("click", () => {
  existe = noDuplicados("Gymnastics");
  if (existe === true) {
    console.log("Ya tenes agregada esta clase");
  } else {
    console.log("Agregaste Gymnastics");
    carritoClases.push(clasesCross[6]);
    sumaTotal();
  }
});

// Imprimo el carrito cuando tocan el boton
btnCarrito.addEventListener("click", () => {
  if (carritoClases.length === 0) {
    printClases.innerHTML = `No seleccionaste nada aun!`;
    printClases.className = "fw-bolder rounded my-3";
  } else {
    printClases.innerHTML = `Seleccionaste las siguientes clases: ${clasesAdqui()}`;
    printClases.className = "fw-bolder rounded my-3";
  }
});

// Creo una funcion con un mapa que me devuelve las clases contratadas
function clasesAdqui() {
  const adqui = carritoClases.map((element) => {
    return element.nombre;
  });
  return adqui;
}

// verifico si la clase esta en el array y no dejo agregar mas de 1
function noDuplicados(input) {
  const existe = carritoClases.some((element) => {
    return element.nombre === input;
  });
  return existe;
}

// sumo el total de las clases adquiridas
function sumaTotal() {
  const total = carritoClases.reduce((acc, element) => {
    return acc + element.precio;
  }, 0);
  console.log("Vas a abonar $" + total);
  printTotal.innerHTML = `Vas abonar el total de: $${total}`;
  printTotal.className = "fw-bolder total p-3 rounded";
}
