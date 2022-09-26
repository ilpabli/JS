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

// Creo variables para capturar los input del usuario via teclado e imprimo en el session los datos de nombre
const inputNombre = document.getElementById("inputnombre");
const inputMail = document.getElementById("inputmail");
const inputBtn = document.getElementById("inputbtn");
const inputP = document.getElementById("inputp");

inputBtn.addEventListener("click", (e) => {
  if (inputNombre.value != "" && inputMail.value != "") {
    e.preventDefault();
    const datosUser = {
      nombre: inputNombre.value,
      mail: inputMail.value.toLowerCase(),
    };
    sessionStorage.setItem("user", JSON.stringify(datosUser));
    inputP.innerText = "Datos almacenados";
    inputP.className = "mt-2 text-success";
  } else {
    e.preventDefault();
    inputP.innerText = "Datos incorrectos";
    inputP.className = "mt-2 text-danger";
  }
});

// Creo una variable para capturar donde se imprimen las clases adquiridas, total y los botones.
const clasesAdquiridas = document.getElementById("clasesadquiridas");
const footerTotal = document.getElementById("total");

// Genero las cards desde JS con un bucle y hago un destructuring
clasesCross.forEach((element) => {
  let { id, nombre, precio, dia, img } = element;
  let div = document.createElement("div");
  div.className = "col my-2";
  div.innerHTML = `
  <div class="card" style="width: 300px;">
  <img src="./img/${img}" class="card-img-top" alt="ejercicio${nombre}">
  <div class="card-body">
  <h4>${nombre}</h4>
    <p class="card-text fw-semibold">Los dias: ${dia}<br>Precio de la clase: $${precio}</p>
    <button class="btn btn-dark" id=btn${id}>Agregar</button>
  </div>
</div>`;
  cards.append(div);
});

// Escucho los click en las Card y capturo el Event, a partir de ahi filtro el target.id y puedo saber
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

// Verifico si la clase esta en el array y no dejo agregar mas de una, ademas imprimo la clase por SweetAlert
function noDuplicados(input) {
  const existe = carritoClases.some((element) => {
    if (element.nombre === input) {
      Toast.fire({
        icon: "error",
        title: "Ya tenes agregado " + input,
      });
    }
    return element.nombre === input;
  });
  return existe;
}

// Funcion de SweetAlert para agregar popup en la parte izquierda
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

// Sumo el total de las clases adquiridas
function sumaTotal() {
  const total = carritoClases.reduce((acc, element) => {
    return acc + element.precio;
  }, 0);
  console.log("Vas a abonar $" + total);
  sessionStorage.setItem("costo", JSON.stringify(total));
  footerTotal.innerHTML = `<h4>Vas Abonar: $${total}</h4>
  <button class="btn btn-danger" id=btnborrar>Vaciar Carrito</button>
  <button class="btn btn-success" id=btnpagar>Pagar</button>`;
  footerTotal.className = "table-success";
}

// Imprimo el carrito y en cada item agregado limpio el anterior resultado, ademas agrego un id al boton borrar clase
const printCarrito = () => {
  clasesAdquiridas.innerHTML = "";
  carritoClases.forEach((element, index) => {
    let { nombre, dia, precio } = element;
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${nombre}<button class="mx-2 btn btn-danger btn-sm" id=${index++}>-</button></td><td>${dia}</td><td>${precio}</td>`;
    clasesAdquiridas.append(tr);
  });
  localStorage.setItem("carrito", JSON.stringify(carritoClases));
  const clases = carritoClases.map((element) => {
    return element.nombre;
  });
  sessionStorage.setItem("clases", JSON.stringify(clases));
  if (carritoClases.length === 0) {
    footerTotal.innerText = "Tu carrito se encuentra vacio";
    localStorage.clear();
  }
};

// Creo una funcion que escucha el id del boton borrar clase y elimina del array la misma.
clasesAdquiridas.addEventListener("click", (e) => {
  borrarClase(e);
});
const borrarClase = (e) => {
  let borrarid = parseFloat(e.target.id);
  carritoClases.splice(borrarid, 1);
  sumaTotal();
  printCarrito();
};

// Escucho los botones del footer con el evento click, dependiendo el boton que se seleccione capturo el target y defino para que
// funcion ir. Ademas agregue pasarelas con SweetAlert para interactuar mas acorde.
footerTotal.addEventListener("click", (e) => {
  let idbtn = e.target.id;
  if (idbtn === "btnborrar") {
    Swal.fire({
      title: "Queres vaciar el carrito?",
      text: "Cuidado perderas tu seleccion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar carrito!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clasesAdquiridas.innerHTML = "";
        footerTotal.innerText = "Tu carrito se encuentra vacio";
        carritoClases.length = 0;
        localStorage.clear();
        console.log("Borraste de forma exitosa el carrito");
        Swal.fire("Carrito Vacio!", "Ya podes comenzar nuevamente!", "success");
      }
    });
  }
  if (idbtn === "btnpagar") {
    Swal.fire({
      title: "<strong>Estas a un paso de finalizar tu reserva!</strong>",
      icon: "question",
      html:
        "Tene en cuenta que ingresaras en la zona de <b>pago</b>, " +
        "solo ingresa datos sensibles dentro de nuestra plataforma.",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<a href="./pages/compra.html" class="text-decoration-none link-light">Estoy de acuerdo!</a>',
      cancelButtonText:
        '<i class="text-decoration-none link-light">Cancelar</i>',
    }).then((result) => {
      if (result.isConfirmed) {
        carritoClases.length = 0;
        localStorage.clear();
      }
    });
  }
});

// Creo una funcion para controlar si en el localStorage tenemos un carrito activo, si es asi lo traigo, lo pusheo con un for
// y lo imprimo con mis funciones de suma y print.
const checkCarrito = () => {
  let localCarrito = JSON.parse(localStorage.getItem("carrito"));
  if (localCarrito === null) {
    console.log("Carrito Local Vacio");
  } else {
    console.log("Carrito Local con Clases");
    for (let index = 0; index < localCarrito.length; index++) {
      carritoClases.push(localCarrito[index]);
    }
    sumaTotal();
    printCarrito();
  }
};
checkCarrito();
