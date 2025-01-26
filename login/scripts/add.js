
const d=document
const names=d.querySelector('#name');
const lastName=d.querySelector('#lastName');
const contrasena=d.querySelector('#contrasena');
const contrasenaRepeat=d.querySelector('#contrasenaRepeat')
 function Guardar_datos() {

  const names=d.querySelector('#name').value ;
  const lastName=d.querySelector('#lastName').value;
  const contrasena=d.querySelector('#password').value;
  const contrasenaRepeat=d.querySelector('#contrasenaRepeat').value

  if (names !== "" || contrasena!== "") {
   
if (contrasena.value=== contrasenaRepeat.value) {
  let GuardarName=localStorage.setItem('nombre',names)
let GuardarLasName=localStorage.setItem('apellido',lastName)
let GuardarContrasena=localStorage.setItem('contrasena',contrasena)
let accediendoName=localStorage.getItem('nombre')
let accediendoLastName=localStorage.getItem('apellido')
let accediendoContrasena=localStorage.getItem('contasena')

console.log(accediendoLastName);
console.log(accediendoContrasena)
console.log(accediendoName)

}
   
  }
}


function evaludor(dirreccionar) {
  let accedientoName=localStorage.getItem('nombre')
  let accedientoLastName=localStorage.getItem('apellido')
  let accedientoContrasena=localStorage.getItem('contrasena')

  if (accedientoContrasena==contrasena.value && accedientoLastName===lastName.value &&names.value===accedientoName) {
    nombre.style.background = "#fff";
    contrasena.style.background = "#fff";
    icono.style.backgroundColor = "white";
    correcto.classList.remove("correcto");
  }
  else{
    nombre.style.background = "red";
    contrasena.style.background = "red";
    icono.style.background = "red";
    error.classList.remove("ocultarLogin");
   
  }
}

window.Guardar_datos=Guardar_datos