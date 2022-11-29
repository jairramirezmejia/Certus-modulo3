function addition_and_sample () {
  result = number1 + number2;
  alert("el resultado es" +result)
}

let result;
let number1 = 3;
let number2 = 8;

addition_and_sample();

number1 = 10;
number2 = 7;

addition_and_sample();

const button3 = document.getElementById("btnEnviar3")
const button4 = document.getElementById("btnEnviar4")

button3.onclick = () => addition_and_sample();
button4.onclick = () => addition_and_sample();
