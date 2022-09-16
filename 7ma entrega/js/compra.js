const datosUser = {};
const htmlPagar = document.getElementById("comprafinal");

const checkUser = () => {
  let usuario = JSON.parse(sessionStorage.getItem("user"));
  let clases = JSON.parse(sessionStorage.getItem("clases"));
  console.log(clases);
  if (usuario === null) {
    console.log("Usuario Anonimo");
    htmlPagar.innerHTML = `<h2>Gracias por tu compra</h2>
    <h5>Las clases contratadas son: ${clases}</h5>
  <p>Como no cargaste tus datos no podemos enviarte un correo.</br>
  Contactate con administracion para mas info.</p>
  <a href="../index.html"><button class="btn btn-success">Volver</button></a>`;
  } else {
    console.log("Usuario Cargado");
    htmlPagar.innerHTML = `<h2>Gracias por tu compra ${usuario.nombre}</h2>
    <h5>Las clases contratadas son: ${clases}</h5>
  <p>Se enviaran a ${usuario.mail} todas las indicaciones.</p>
  <a href="../index.html"><button class="btn btn-success">Volver</button></a>`;
  }
};

checkUser();
