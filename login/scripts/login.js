const D=document
let Registrar =D.querySelector('NewUser')
let mostrar = D.querySelector('#salir')
let nombre = D.getElementById("nombreDeUsuario");
let icono = D.getElementById("icono_user");
let btn = D.getElementById("btn");
let cerar = D.getElementById("cerar");
let correcto = D.getElementById("correcto");
let vefiricacion_alert = D.getElementById("Verificacion_alert");
let enlace=D.getElementById("enlace");
let contrasena=D.querySelector('#contrasena')
 let advertencia=document.querySelector('#error')
 let Login=D.querySelector('#salir') 
 let btnNuevoUsuario=document.querySelector("#Crear")
 let Cargar=document.querySelector('#spinner')

let = PieDeLogin=D.querySelector('#PieDeLogin')

vefiricacion_alert.addEventListener("click", correcta);
/* cerar.addEventListener("click", erro); */
vefiricacion_alert.addEventListener("click", vereficar);
function vereficar() {
  correcto.classList.toggle("correcto");
}

function spinner(){  
let strong=document.createElement('strong')
let div= document.createElement('div')
div.id='sppiners'
Cargar.appendChild(strong)
strong.id='SppiderTexto'

Cargar.appendChild(div)
Cargar.classList.add('d-flex', 'align-items-center')
div.classList.add('spinner-border', 'ms-auto')
 strong.textContent='Loggin....'

 let spinner=D.querySelector('#sppiners')  
 let textospinner=D.querySelector('#SppiderTexto')



setTimeout(function () {
  spinner.classList.add('ocultarLogin')
  textospinner.classList.add('ocultarLogin')
},3000)
}
 

function correcta() {
  correcto.classList.toggle("erro1");
}

 
function dirreccionar() {
 enlace.href="http://127.0.0.1:5500/CajeroAutomatico/Pagina%20de%20cajero/Retiro.html"
}


btn.addEventListener('click',evaludor)

function evaludor() {
 
  let NC =JSON.parse(localStorage.getItem('User'))
  let N=NC.nombre
  let C=NC.contrasenaRepeat
  

  if(nombre.value===N && C==contrasena.value){
dirreccionar()
spinner()

  }else{


Cargar.classList.add('ocultarLogin')
    //!buscar el error 
    advertencia.classList.remove('ocultarLogin')
advertencia.classList.add('ocultar')
advertencia.classList.add('alert-danger')
advertencia.textContent='El usuario o contrasena estan mal '  

  }

  
}

advertencia.addEventListener('animationend',function(){
  advertencia.classList.add('ocultarLogin')
  
  
 }) 








