var retiro = document.getElementById("Retiro")
var boton = document.getElementById("botton")
var NombreDeUsuario = document.getElementById("Nombre");
var EstoDecuentActual = document.getElementById("EstodoDeCuenta");
var MontoRetirado = document.getElementById("MontoRetirado");
var SaldoActualizado = document.getElementById("SaldoActualizado");
var aler = document.getElementById("aler")
var cera = document.getElementById("cerrar")
var boton2 = document.getElementById("botto")
var menu = document.getElementById("menu")
var usuario = document.getElementById("usuario");
var m_nombre_de_usurio=document.getElementById("m_nombre_de_usurio")
var m_estado_de_cuenta=document.getElementById("m_estado_de_cuenta")
var volver=document.getElementById("volver")
boton.addEventListener("click", evaluar)
cera.addEventListener("click", cerar)
var cera1 = document.getElementById("cera")
var contenedor = document.getElementById("contenedor")
var animacion = document.getElementById("animacion")
cera1.addEventListener("mouseover", cerar_seccion);
cera1.addEventListener("mouseout", fuera_de_cerrar_seccion)
cera1.addEventListener("click",cera)

function fuera_de_cerrar_seccion() {
  cera1.style.opacity = "1";
  contenedor.style.opacity = "1";
}
function cerar_seccion() {
  contenedor.style.opacity = "0.5";
  cera1.style.opacity = "1";

}
function cerar() {
  aler.style.display = "none";
  var retiro = (document.getElementById("Retiro").value = "");
}

usuario.addEventListener("click", usuari);
function usuari() {
  menu.classList.toggle("menu2");
}
//Con la fucion de contructora ,creamos los las propiedaes y valor del objecto
function Cuentas(nombre, apellido, edad, contrasena, saldo) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.contrasena = contrasena;
  this.saldo = saldo;
}
//Estas seria las tres cuenta de usuario con sus respectivos valores
var P1 = new Cuentas("Juan", "Salazar", 43, "772357", 300);
var P2 = new Cuentas("Pedro", "Perez", 40, "12857", 600);
var P3 = new Cuentas("Maria", "Peña", 41, "92057", 500);

// Guardar la informacion en la API de local stogre

var cuenta1 = localStorage.setItem("cuenta1", JSON.stringify(P1));
//conversion de objecto a cadena de texto
console.log(localStorage.getItem("cuenta1"));
lst = JSON.parse(localStorage.getItem("cuenta1"));
var cuenta2 = localStorage.setItem("cuenta2", JSON.stringify(P2));
console.log(localStorage.getItem("cuenta2"));
var cuentas2 = JSON.parse(localStorage.getItem("cuenta2"));
var cuenta3 = localStorage.setItem("cuenta3", JSON.stringify(P3));
console.log(localStorage.getItem("cuenta3"));
console.log(P1.apellido)
var cuentas3 = JSON.parse(localStorage.getItem("cuenta3"));
//Funcion evaluar,toma las siguientes condiciones para evaluar  sobre el saldo y esto lo imprimimos en una tabla
function evaluar() {
  var negativo=-0;
  var saldoActual = P1.saldo - retiro.value;
  if (retiro.value >= P1.saldo || saldoActual <= 9 || retiro.value <negativo) {
    if ((aler.style = "none" === "none")) {
      aler.style.display = "block";
    }
  } else if (retiro.value !== "") {
    NombreDeUsuario.innerHTML = P1.nombre;
    EstoDecuentActual.innerHTML = P1.saldo;
    MontoRetirado.innerHTML = retiro.value;
    SaldoActualizado.innerHTML = saldoActual;
    m_estado_de_cuenta.innerHTML = saldoActual;
    alert("El retiro se realizo de manera correcta");
  } 
}

evaluar();

function evaluarCredenciales(){
  var input_nombre=localStorage.getItem("nombre_de_usuari")
 
  if ( input_nombre===P1.nombre) {
    m_nombre_de_usurio.innerHTML = P1.nombre;
  m_estado_de_cuenta.innerHTML = P1.saldo;
  }else if (input_nombre===P2.nombre){
    m_nombre_de_usurio.innerHTML = P2.nombre;
    m_estado_de_cuenta.innerHTML = P2.saldo;
  }else{
    m_nombre_de_usurio.innerHTML = P3.nombre;
    m_estado_de_cuenta.innerHTML = P3.saldo;
  }
}
evaluarCredenciales()
