// Caso Propuesto1:
// Crear una aplicación web donde se ingrese un número entero de 3 cifras y determine lo siguiente: si sus
// cifras son iguales halle la suma de sus raíces cuadradas, caso contario halle la suma de sus cuadrados.

const result1 = document.getElementById("result1");
const number1 = document.getElementById("number1").value;
const btn = document.getElementById("btn1");
btn.addEventListener("click", number);

function number(number) {
  let arrayNumber = [...number+''].map(n=>+n);
  let a = arrayNumber[0];
  let b = arrayNumber[1];
  let c = arrayNumber[2];
  if (a === b && b === c) {
    let operation = Math.sqrt(a) + Math.sqrt(b) + Math.sqrt(c);
    return result1.innerText = `Cifras iguales, Suma de raices cuadradas = ${operation}`;
  }else {
    let operation = Math.pow(a, 2) + Math.pow(b,2) + Math.pow(c, 2);
    return result1.innerText = `Cifras diferentes, Suma de sus cuadrados = ${operation}`;
  }
}


// Caso Propuesto2:
// Crear una función que valide una contraseña que cumpla las siguientes características,
// debe contener minúsculas y
// al menos 1 mayúscula,
// debe tener al menos un signo especial: @ o el _ (guion bajo), además
// debe contener al menos 1 digito numérico y
// debe tener como mínimo 10 caracteres.

const result2 = document.getElementById("result2");
let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})")


if(/\s/.test($scope.Password)){
    $scope.isValidPassword = false;
    return;
}

// Caso Propuesto3:
// Crear una función que valide el correo electrónico, de tal manera que solo se acepten del dominio
// certus.edu.pe, así mismo, el nombre del usuario no debe contener espacios en blanco.
