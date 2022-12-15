// Crear una clase Alumno con los atributos: código, nombre, nota1, nota2, nota3 y nota 4; y las operaciones: promedio (), condicion () y obsequio (). Para calcular el promedio considere la siguiente fórmula:
// PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
// Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
// Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.

class Student {
  constructor (code, name, grade1, grade2, grade3, grade4) {
    this.code = code;
    this.name = name;
    this.grade1 = grade1;
    this.grade2 = grade2;
    this.grade3 = grade3;
    this.grade4 = grade4;
  }

  average() {
    let average = this.grade1*0.15 + this.grade2*0.2 + this.grade3*0.25 + this.grade4*0.4;
    return average;
  }

  condition () {
    let grade = (this.average() >= 12) ? "Aprobado" : "Desaprobado" ;
    return grade ;
  }

  present () {
    let present = (this.average() > 17) ? "Obsequio mochila" : "No llegó a al nota suficiente para el obsequio"
    return present;
  }
}

const example1 = new Student (1, "Juan", 12, 14, 16, 18);
console.log(example1.average());
console.log(example1.condition());
console.log(example1.present());

const doc1 = document.getElementById("result1");
const button = document.getElementById("button1");
button.addEventListener("click", write);

function write () {
  doc1.innerText = "Hola";
}
