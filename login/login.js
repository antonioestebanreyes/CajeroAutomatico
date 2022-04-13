var cuentas1 = JSON.parse(localStorage.getItem("cuenta1"));
var cuenta2 = JSON.parse(localStorage.getItem("cuenta2"));
var cuenta3 = JSON.parse(localStorage.getItem("cuenta3"));
var nombre = document.getElementById("nombreDeUsuario");
var contrasena = document.getElementById("contrasena");
var icono = document.getElementById("icono_user");
var btn = document.getElementById("btn");
var error = document.getElementById("error1");
var cerar = document.getElementById("cerar");
var correcto = document.getElementById("correcto");
var vefiricacion_alert = document.getElementById("Verificacion_alert");
var enlace=document.getElementById("enlace");
vefiricacion_alert.addEventListener("click", correcta);
btn.addEventListener("click", eva1);
cerar.addEventListener("click", erro);
vefiricacion_alert.addEventListener("click", vereficar);
function vereficar() {
  correcto.classList.toggle("correcto");
}
function eva1() {
  if (
    cuentas1.nombre !== nombre.value ||
    cuentas1.contrasena !== contrasena.value ||
    nombre.value === "" ||
    contrasena === ""
  ) {
    if (
      cuenta2.nombre === nombre.value ||
      cuenta2.contrasena === contrasena.value ||
      nombre.value === " " ||
      contrasena === " "
    ) {
      nombre.style.background = "#fff";
      contrasena.style.background = "#fff";
      icono.style.backgroundColor = "white";
      correcto.classList.remove("correcto");
      Guardar_datos();
      dirreccionar()
    } else if (
      cuenta3.nombre === nombre.value ||
      cuenta3.contrasena === contrasena.value ||
      nombre.value === " " ||
      contrasena === " "
    ) {
      nombre.style.background = "#fff";
      contrasena.style.background = "#fff";
      icono.style.backgroundColor = "white";
      correcto.classList.remove("correcto");
      Guardar_datos();
      dirreccionar()
    } else {
      nombre.style.background = "red";
      contrasena.style.background = "red";
      icono.style.background = "red";
      error.classList.remove("error1");
    }
  } else {
    nombre.style.background = "#fff";
    contrasena.style.background = "#fff";
    icono.style.backgroundColor = "white";
    correcto.classList.remove("correcto");
    Guardar_datos();
    dirreccionar()
  }
}

function erro() {
  error.classList.toggle("error1");
}
function correcta() {
  correcto.classList.toggle("erro1");
}
function Guardar_datos() {
  if (nombre.value !== "" || contrasena.value !== "") {
    var contrasenaA = document.getElementById("contrasena").value;
    var nombreB = document.getElementById("nombreDeUsuario").value;

    var nombre_usurio = localStorage.setItem("nombre_de_usuari", nombreB);
    var x = localStorage.getItem("nombre_de_usuari");

    var contra = localStorage.setItem("contraseña", contrasenaA);
    var y = localStorage.getItem("contraseña");

    console.log(y);
    console.log(x);
  }
}
function dirreccionar() {
 enlace.href="file:///C:/Users/javacrispt/Desktop/cajeros_aumatico/Pagina%20de%20cajero/Retiro.html"
}
console.log(localStorage.getItem("contraseña"));

console.log(cuentas1.nombre);
console.log(cuentas1.contrasena);
console.log(cuenta2.nombre);
console.log(cuenta2.contrasena);
console.log(cuenta3.nombre);
console.log(cuenta3.contrasena);
