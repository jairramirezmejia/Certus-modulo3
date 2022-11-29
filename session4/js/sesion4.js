//EJERCICIOS CON OBJETO MATH
const result3 = document.getElementById("result3");

result3.innerHTML = "Valor Absoluto: " + Math.abs(-45);
result3.innerText += "\n Max de 10, 15, 30 es: " + Math.max(15,10, 30, 15);
result3.innerText += "\n Max de 10, 15, 30 es: " + Math.min(15,10, 30, 15);
result3.innerText += "\n Potencia 2 al cubo: " + Math.pow(2, 3);
result3.innerText += "\n Raiz cuadrada de 4: " + Math.sqrt(16);
result3.innerText += "\n Redondear : " + Math.ceil(12.42);
result3.innerText += "\n Redondear : " + Math.floor(12.92);
result3.innerText += "\n Redondear : " + Math.round(12.52);

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//EJERCICIOS CON OBJETO DATE
const result2 = document.getElementById("result2");

let startDate = new Date (2022, 5, 16, 7, 10, 30, 45);
let endDate = new Date (2022, 10, 16);

// january = 0, february = 1, march = 2, april = 3 ... december = 11
// sunday = 0, monday = 1 ,... saturday = 6
//get
result2.innerText = startDate;
result2.innerText += "\n DÍA DE LA SEMANA: " +startDate.getDay();
result2.innerText += "\n DÍA: " +startDate.getDate();
result2.innerText += "\n MES: " +startDate.getMonth();
result2.innerText += "\n AÑO: " +startDate.getFullYear();
result2.innerText += "\n HORA: " +startDate.getHours();
result2.innerText += "\n MINUTO: " +startDate.getMinutes();
result2.innerText += "\n SEGUNDOS: " +startDate.getSeconds();
result2.innerText += "\n MILISEGUNDOS: " +startDate.getMilliseconds();

//set
startDate.setMonth(5);
result2.innerText += "\n NUEVO MES: " +startDate.getMonth();

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// EJERCICIO CON OBJETO STRING
const result1 = document.getElementById("result1");
let word = "correod eprueba123 @gmail.com. edu.pe";

let expReg = /a/g;
let arrayResult = word.match(expReg);
result1.innerText = arrayResult + " Tamaño: " + arrayResult.length;

let expReg = /@/g;
arrayResult = word.match(expReg);
result1.innerText += "\n" + arrayResult + " Tamano: " + arrayResult.length;

let expReg = /[a-z]/g;
arrayResult = word.match(expReg);
result1.innerText += "\n" + arrayResult + " Tamaño: " + arrayResult.length;

let ind = word.indexOf(" ");
result1.innerText += "\n" + " Posición del espacio " + ind;

let arrayWord = word.split(" ");
result1.innerText += "\n" + " Tamaño de Array Candena: " + arrayWord.length;
result1.innerText += "\n" + "Array[0]: " + arrayWord[0] + " Array[1]: "+arrayWord[1] +" Array[2]: "+ arrayWord[2];
