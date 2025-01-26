document.addEventListener("DOMContentLoaded",function(){
const D=document

  const conte= D.querySelector("#login")
const conteLogin=D.querySelector("#conteLogin")
const salir=D.querySelector("#salir")
const tituloLogin= D.querySelector("#tituloLogin")
const btnNuevoUsuario=D.querySelector("#Crear")
const advertencias=D.querySelector('#error')
const crear=D.querySelector('#enlace')
const form=D.querySelector("form")
const Newbtn=D.querySelector('#Newbtn')
const enviar=D.querySelector('#btn')
const Registro=D.querySelector('#Registro')


btnNuevoUsuario.addEventListener("click",UserNew)
enviar.addEventListener('click',Guardar_datos)

let valor =0
let estado=0
function GuardarValorDeUser(nombre,apellido,contrasena,contrasenaRepeat,Email ){
  
let User={
nombre:nombre,
apellido:apellido,
contrasena:contrasena,
contrasenaRepeat:contrasenaRepeat,
Email:Email,
Saldo:5000,

}
const UserNuevo=JSON.stringify(User)
localStorage.setItem('User',UserNuevo)

}


function UserNew(){
  
  estado++

  
//!Aqui estamo condicionado,cuandas veces se va a repetir un elemento 
valor++

btnNuevoUsuario.classList.add('estado')
conte.classList.add("ocultarLogin")
salir.innerHTML="Login"
tituloLogin.innerHTML="Nuevo usuario"
btnNuevoUsuario.classList.add("status")
salir.classList.remove("status")



 if (valor===1 || estado===1) {
 
  
  if(conte.classList.contains('ocultarLogin')&& valor===1){

   
    
     NuevoUsuario()

  }
}else{


if (estado===1) {
  
  NuevoUsuario()

}

 
  
} 

salir.addEventListener('click',MostrarLogin) 


}








let NuevoUsuario=()=>{   
//!Aqui es donde se crea los elemetos para el resgistro

const form=D.createElement("form")
const div= D.createElement("div")
 const label1=D.createElement("label")
  const label2=D.createElement("label")
   const label3= D.createElement("label")
   const label4= D.createElement("label")
   const label5= D.createElement("label")
  const input1= D.createElement("input")
   const input2=D.createElement("input")
   const input3=D.createElement("input")
    const input4=D.createElement("input")
    const input5=D.createElement("input")


  Registro.appendChild(form)
  form.appendChild(div)
  div.appendChild(label1)
  div.appendChild(input1)
  div.appendChild(label2)
  div.appendChild(input2)
 div.appendChild(label3)
 div.appendChild(input3)
 div.appendChild(label4)
 div.appendChild(input4)
 div.appendChild(label5)
div.appendChild(input5)
div.classList.add("row")
 div.setAttribute("id","NewUser")
 form.setAttribute("id","New")
 input1.setAttribute("type","text")
 input2.setAttribute("type","text")
 input3.setAttribute("type","password")
 input4.setAttribute("type","password") 
 input5.setAttribute("type","email")

  input1.id='name'
  input2.id='lastName'
  input3.id='password'
  input4.id='contrasenaRepeat'
  input5.id='email'
 label1.innerText="Name"
  label2.innerText="Apellido completo"
  label3.innerText="Contraseña"
  label4.innerText="Repetir"
  label5.innerText="Email"
  crear.innerText='Crear'




}
 
  





function Guardar_datos() {
 //!Aqui estamos haciendo una corroboracion si una clase exite 

 
if (btnNuevoUsuario.classList.contains('estado')) {
  //!Aqui estamos usadon expresiones regulares 

  const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const names=D.querySelector('#name').value.trim() ;
  const lastName=D.querySelector('#lastName').value.trim();
  const contrasena=D.querySelector('#password').value.T;
  const contrasenaRepeat=D.querySelector('#contrasenaRepeat').value.trim()
 const Email=D.querySelector('#email').value.trim()



 //!* Aqui se esta evalundo los formularios de registro

if (  regex.test(Email)===true && names.length>0 || names.value===' ' && contrasena.length>0  ||contrasena===' ' ||contrasenaRepeat===' ' && contrasena === contrasenaRepeat ) {
 //*Aqui se esta guardo los valores del formulario de registro 
 //?Guardar elemnto en mayuscula,cuando se guarde en localstoge 
 GuardarValorDeUser(names,lastName,contrasena,contrasenaRepeat,Email)

    
    //!Aqui se se esta creado una ventan emergente para la creacion del un nuevo usuario
     advertencias.classList.remove('ocultarLogin')
advertencias.classList.add('ocultar')
advertencias.classList.remove('alert-danger')
advertencias.classList.add('alert-success')
advertencias.textContent='El usuario fue creado con exito' 
const NewUser=document.querySelector('#NewUser')
const Lingon=document.querySelector('#login')
//!Aqui estamos limpiado el html 
Registro.innerHTML=""
Lingon.classList.remove('ocultarLogin')
BotonCrearUsuario()
  
}else{
//!Anacion con css que es una venta de emergente de un error 
const names =D.querySelector('#name')
const apellido=D.querySelector('#lastName')
const contrasena=D.querySelector('#password') 
const contrasenaRepeat=D.querySelector('#contrasenaRepeat')
const Email=D.querySelector('#email')

  advertencias.classList.remove('ocultarLogin')
advertencias.classList.add('ocultar')
advertencias.classList.add('alert-danger')
advertencias.textContent='Por favor llenar todos los campos ' 
 







FormatearRegistro(names,apellido,contrasena,contrasenaRepeat,Email)
}
//*Aqui estamos colocando un evento se ejectara cuando la animacion termine
     
   advertencias.addEventListener('animationend',function(){
  advertencias.classList.add('ocultarLogin')
   
  ;
 }) 
    
       
      
  }
    
      
    }
    
    
function BotonCrearUsuario() {
  
    crear.textContent="Login"
    btnNuevoUsuario.classList.remove('estado')
btnNuevoUsuario.classList.remove('status')
salir.classList.add('status')
  

}


 const MostrarLogin=()=>{
Registro.innerHTML=''
conte.classList.remove('ocultarLogin')
btnNuevoUsuario.classList.remove('estado')
salir.classList.add('status')
btnNuevoUsuario.classList.remove('status')
valor=0

  
    
  } 
  
  
   
 const FormatearRegistro=(nombre,apellido,contrasena,contrasenaRepeat,email)=>{
  nombre.value=''
  apellido.value=''
  contrasena.value=''
  contrasenaRepeat.value=''
  email.value=''

  
 }



})
