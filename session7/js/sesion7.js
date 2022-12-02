// Validacion de formulario

// Controles del formulario
const dni = document.getElementById("txtDni");
const msgValDni = document.getElementById("msgValDni");

const nombre = document.getElementById("txtNombre");
const msgValNombre = document.getElementById("msgValNombre");

const tel = document.getElementById("txtTel");
const msgValTel = document.getElementById("msgValTel");

const pwd = document.getElementById("txtPwd");
const msgValPwd = document.getElementById("msgValPwd");

const email = document.getElementById("txtEmail");
const msgValEmail = document.getElementById("msgValEmail");

const btnEnviar = document.getElementById("btnEnviar");

// Funcion de validacion
function Validar(){
  // Input Dni
  let vdni = dni.value;
  msgValDni.innerText ="";
  let RegExpDni = new RegExp("^[0-9]{8}$");

  // Input Nombre
  let vnombre = nombre.value;
  msgValNombre.innerText ="";
  let RegExpNom = /^[A-Z]+([\s]?[A-Za-z])*$/;

  // Input Telefono
  let vtel = tel.value;
  msgValTel.innerText ="";
  let RegExpTel = /^\([0-9]{2}\)[0-9]{3}-[0-9]{3}-[0-9]{3}$/;


  // Input Password
  let vpwd = pwd.value;
  msgValPwd.innerText ="";
  let RegExpPwd = /^[A-Z]{1}[a-z]*[0-9]{1}/;

  // Input Email
  let vemail = email.value;
  msgValEmail.innerText ="";
  let RegExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  // Condiciones para la validacion
  if(!RegExpDni.test(vdni)){
    msgValDni.innerText = "Dni inválido";
  } else if(vnombre=="" || !RegExpNom.test(vnombre)){
    msgValNombre.innerText = "Nombre inválido";
  } else if(!RegExpTel.test(vtel)){
    msgValTel.innerText = "Ingrese codigo de pais (01)###-###-###";
  } else if(vpwd.length<10 || !RegExpPwd.test(vpwd)){
    msgValPwd.innerText = "Error de contraseña";
  } else if(!RegExpEmail.test(vemail)){
    msgValEmail.innerText = "Email invalido";
  }
}

// Asignar funcio la boton Enviar
btnEnviar.onclick = () => Validar();
const chkboton = document.getElementById("invalidCheck");
boton.disabled = true;

chkboton.onchange = function(){
  if(chkboton.checked){
    boton.disabled = false;
  }else{
    boton.disabled = true;
}
}
