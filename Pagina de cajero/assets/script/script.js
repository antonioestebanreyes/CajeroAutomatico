const D =document
let retiro = D.getElementById("Retiro");
let boton = D.getElementById("botton");
let NombreDeUsuario = D.getElementById("Nombre");
let EstoDecuentActual = D.getElementById("EstodoDeCuenta");
let MontoRetirado = D.getElementById("MontoRetirado");
let SaldoActualizado = D.getElementById("SaldoActualizado");
let aler = D.getElementById("aler");
let Correcto=D.querySelector('#Correcto')
let cera = D.getElementById("cerrar");
let menu = D.getElementById("menu");
let usuario = D.getElementById("usuario");
let m_nombre_de_usurio = D.getElementById("m_nombre_de_usurio");
let m_estado_de_cuenta = D.getElementById("m_estado_de_cuenta");
boton.addEventListener("click", evaluar);
cera.addEventListener("click", cerar);
let cera1 = D.querySelector("#cera");
let contenedor = D.querySelector("#contenedor");
let animacion = D.querySelector("#animacion");
cera1.addEventListener("mouseover", cerar_seccion);
cera1.addEventListener("mouseout", fuera_de_cerrar_seccion);



let accendientoALosDactosDelUsuario=localStorage.getItem('User')
let Parse= JSON.parse(accendientoALosDactosDelUsuario)
const {Email,Saldo,apellido,contrasenaRepeat,nombre}=Parse

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
  var retiro = (D.getElementById("Retiro").value = "");
}

usuario.addEventListener("click", usuari);
function usuari() {
  menu.classList.toggle("menu2");
}

function evaluar() {

  let negativo = -0;
  let saldoActual = Saldo - retiro.value;
  let SaldoRestado=saldoActual


 Parse.Saldo = saldoActual

let SaldoGuardo=localStorage.setItem('User', JSON.stringify(Parse));

  if (retiro.value >= Saldo || saldoActual <= 9 || retiro.value < negativo) {
    if ((aler.style = "none" === "none")) {
      aler.style.display = "block";
    }
  } else if (retiro.value !== "") {
    NombreDeUsuario.innerHTML = nombre;
    EstoDecuentActual.innerHTML = Saldo;
    MontoRetirado.innerHTML = retiro.value;
    SaldoActualizado.innerHTML = saldoActual;
    m_estado_de_cuenta.innerHTML = saldoActual;
    Correcto.classList.remove('menu')
    Correcto.textContent=`Se retiro correctamente la contidad fue de $ ${retiro.value}`
   Correcto.classList.add('ocultar')
  }
}
Correcto.addEventListener('animationend',function(){
  Correcto.classList.add('menu')
})
evaluar();

function evaluarCredenciales() {
  let input_nombre = localStorage.getItem("nombre_de_usuari");

  if (input_nombre === nombre) {
    m_nombre_de_usurio.innerHTML = nombre;
    m_estado_de_cuenta.innerHTML = Saldo;
  } else if (input_nombre === nombre) {
    m_nombre_de_usurio.innerHTML = nombre;
    m_estado_de_cuenta.innerHTML = Saldo;
  } else {
    m_nombre_de_usurio.innerHTML = nombre;
    m_estado_de_cuenta.innerHTML = Saldo;
  }
}
evaluarCredenciales();
