// Ejercicio 1
const result1 = document.getElementById("result1");
function salary(numbersOfHours = 0, hourly) {
  if (numbersOfHours > 40) {
    let extraHours = numbersOfHours - 40
    let salary = hourly * 40 + extraHours * hourly * 1.5;
    return result1.innerHTML = "1) Salario: S/ " +salary;
  } else {
    let salary = numbersOfHours * hourly;
    return result1.innerHTML = "1) Salario: S/ " +salary;
  }
}
salary(50,20);

/*
// Ejercicio 2
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");
function perimeter(radio=0) {
  for (let index = 0; index < 3; index++) {
    let perimeter2 = 2 * 3.14159 * radio * Math.pow(2,- index);
    console.log(perimeter2);
    result2.innerText = "Resultado 2: Perímetro es " + perimeter2;
  }
  return
}
console.log(perimeter(50));
*/
const result2 = document.getElementById("result2");
function perimeter(radio=0) {
   const base = 2 * 3.14159 * radio;
   return result2.innerText = `2) Perímetros: (100%): ${base}, (50%): ${base*0.5}, (25%): ${base*0.25}`
}
perimeter(50);

/*
function perimeter(radio=0) {
  for (let index = 0; index < 3; index++) {
    let perimeter2 = 2 * 3.14159 * radio * Math.pow(2,- index);
    console.log(perimeter2);
    result2.innerText = "Resultado 2: Perímetro es " + perimeter2;
  }
  return
}
console.log(perimeter(50));
*/
/*
//Ejercicio 2.0
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");

function perimeter(radio = 0) {;
  let perimeter2 = 2 * 3.14159 * radio;
  result2.innerText = `Resultado ${perimeter2} `;
  let perimeter3 = 2 * 3.14159 * radio * 0.5;
  result3.innerText = `Resultado ${perimeter3}`;
  let perimeter4 = 2 * 3.14159 * radio * 0.25;
  result4.innerText = `Resultado ${perimeter4}`;
  return
}
console.log(perimeter(50));
*/

//Ejercicio 3
const result3 = document.getElementById("result3");
function salary2 (numbersOfHours = 0, hourly) {
  let salary2 =  numbersOfHours * hourly;
  return result3.innerText = `3) Salario Total: S/${salary2},  (30%): S/${salary2*0.5},  (60%): S/ ${salary2*0.25}, (80%): S/${salary2*0.25}`;
}
salary2(100,30);

//Ejercicio 4
const result4 = document.getElementById("result4");
function finalMark (nota1 = 0, nota2 = 0, nota3 = 0, finalMark = 0, finalWork = 0) {
  let operation = (nota1+ nota2 + nota3) * 0.55 / 3 + finalMark * 0.3 + finalWork * 0.15;
  return result4.innerText = `4) Calificación Final de Algoritmos: ${operation}`;
}
finalMark(12,13,16,18,10);

//Ejercicio 5
const result5 = document.getElementById("result5");
function budget(budget = 0) {
  const operation = budget* 0.3;
  return result5.innerText = `5) Ginecología: S/${budget* 0.4}, Traumatología: S/${operation}, Pediatría: S/${operation}`;
}
budget(1000);

// Ejercicio Asincrónico 1
const result6 = document.getElementById("result6");
function primeNumber (number) {
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return result6.innerText = `6) ${number} no es un número primo`;
    }
  }
  return result6.innerText = `6) ${number} si es un número primo`;
}

primeNumber(1913);
