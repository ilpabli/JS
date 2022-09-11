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

// Creo una variable para capturar donde se imprimen las cards
const cards = document.getElementById("cards");

// Creo una variable para capturar donde se imprimen las clases adquiridas y el total
const clasesAdquiridas = document.getElementById("clasesadquiridas");
const footerTotal = document.getElementById("total");

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

// escucho los click en las card y capturo el event, a partir de ahi filtro el target.id y puedo saber
// el id del boton seleccionado
cards.addEventListener("click", (e) => {
  addCarrito(e);
});

const addCarrito = (e) => {
  let input = e.target.id;
  switch (input) {
    case "btn1":
      existe = noDuplicados("Crossfit");
      if (existe === true) {
        console.log("Ya tenes agregada esta clase");
      } else {
        console.log("Agregaste Crossfit");
        carritoClases.push(clasesCross[0]);
        sumaTotal();
        printCarrito();
      }
      e.stopPropagation;
      break;
    case "btn2":
      existe = noDuplicados("Funcional");
      if (existe === true) {
        console.log("Ya tenes agregada esta clase");
      } else {
        console.log("Agregaste Funcional");
        carritoClases.push(clasesCross[1]);
        sumaTotal();
        printCarrito();
      }
      e.stopPropagation;
      break;
    case "btn3":
      existe = noDuplicados("Remo y Bicicleta");
      if (existe === true) {
        console.log("Ya tenes agregada esta clase");
      } else {
        console.log("Agregaste Remo y Bicicleta");
        carritoClases.push(clasesCross[2]);
        sumaTotal();
        printCarrito();
      }
      e.stopPropagation;
      break;
    case "btn4":
      existe = noDuplicados("Levantamiento Olimpico");
      if (existe === true) {
        console.log("Ya tenes agregada esta clase");
      } else {
        console.log("Agregaste Levantamiento Olimpico");
        carritoClases.push(clasesCross[3]);
        sumaTotal();
        printCarrito();
      }
      e.stopPropagation;
      break;
    case "btn5":
      existe = noDuplicados("Mobility");
      if (existe === true) {
        console.log("Ya tenes agregada esta clase");
      } else {
        console.log("Agregaste Mobility");
        carritoClases.push(clasesCross[4]);
        sumaTotal();
        printCarrito();
      }
      e.stopPropagation;
      break;
    case "btn6":
      existe = noDuplicados("Skills");
      if (existe === true) {
        console.log("Ya tenes agregada esta clase");
      } else {
        console.log("Agregaste Skills");
        carritoClases.push(clasesCross[5]);
        sumaTotal();
        printCarrito();
      }
      e.stopPropagation;
      break;
    case "btn7":
      existe = noDuplicados("Gymnastics");
      if (existe === true) {
        console.log("Ya tenes agregada esta clase");
      } else {
        console.log("Agregaste Gymnastics");
        carritoClases.push(clasesCross[6]);
        sumaTotal();
        printCarrito();
      }
      e.stopPropagation;
      break;

    default:
      break;
  }

  e.stopPropagation();
};

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
  footerTotal.innerText = "Vas abonar: $" + total;
  footerTotal.className = "table-success";
}

// imprimo el carrito y en cada item agregado limpio el anterior resultado
const printCarrito = () => {
  clasesAdquiridas.innerHTML = "";
  carritoClases.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${element.nombre}</td><td>${element.dia}</td><td>${element.precio}</td>`;
    clasesAdquiridas.append(tr);
  });
};
