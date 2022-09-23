const conte= document.querySelector("#login")
const conteLogin=document.querySelector("#conteLogin")
const salir=document.querySelector("#salir")
const tituloLogin= document.querySelector("#tituloLogin")
const btnNuevoUsuario=document.querySelector("#NuevoUsuario")
const form=document.querySelector("form")
btnNuevoUsuario.addEventListener("click",UserNew)
salir.addEventListener("click",login)

function UserNew(){
conte.classList.add("ocultarLogin")
salir.innerHTML="Login"
tituloLogin.innerHTML="Nuevo usuario"
btnNuevoUsuario.classList.add("status")
salir.classList.remove("status")
NuevoUsuario()
}
const NuevoUsuario=()=>{   
const form=document.createElement("form")
  const div=  document.createElement("div")
 const label1=  document.createElement("label")
 const label2=  document.createElement("label")
 const label3=  document.createElement("label")
 const label4=  document.createElement("label")
  const input1=  document.createElement("input")
  const input2=  document.createElement("input")
  const input3=  document.createElement("input")
  const input4=  document.createElement("input")
  conteLogin.appendChild(form)
  form.appendChild(div)
  div.appendChild(label1)
  div.appendChild(input2)
  div.appendChild(label2)
  div.appendChild(input3)
  div.appendChild(label3)
  div.appendChild(input4)
 div.classList.add("row")
 div.setAttribute("id","NewUser")
 form.setAttribute("id","New")
 input1.setAttribute("type","text")
 input2.setAttribute("type","text")
 input3.setAttribute("type","password")
 input4.setAttribute("type","passwor")
  
  
  

  label1.innerHTML="Name"
  label2.innerHTML="Apellido completo"
  label3.innerHTML="Contraseña"
  label4.innerHTML="Repetir"

    

}

function login(e){
  console.log( e.target.value);
  const User= document.querySelector("#NewUser")
  const form2= document.querySelector("#New")
  console.log(User);
  console.log(form2);
  conteLogin.removeChild(form2)
    conte.classList.remove("ocultarLogin");
    btnNuevoUsuario.classList.remove("status")
    salir.classList.add("status")
    salir.innerHTML="Salir"
    User.classList.add("ocultarLogin")
    if (btnNuevoUsuario!=true) {
      console.log(true);
     // salir.href="file:///C:/Users/javacrispt/Desktop/cajeros_aumatico/Home/index.html"
    }else{
      console.log(false);
    }


    
}