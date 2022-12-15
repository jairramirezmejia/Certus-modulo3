// Crear una clase Empleado con los atributos: código, nombre, apellido, correo y cargo; y las operaciones: sueldoBruto (), descuento () y sueldoNeto (). Para calcular el sueldo bruto, considere los siguientes criterios:

// Cargo	Sueldo (S/)
// Jefe	5000
// Analista	4000
// Programador	3000
// Soporte	2000
// Asistente	1500

// Para calcular el descuento, es el 12.5% del sueldo bruto. Finalmente calcule el sueldo neto.



class Employee {

  constructor (code, name, lastaName, email, post) {
    this.code = code;
    this.name = name;
    this.lastaName = lastaName;
    this.email = email;
    this.post = post;
  }

  grossSalary () {
    let salary = 0;
    switch (this.post) {
      case 'jefe':
        salary = 5000;
        break;
      case 'analista':
        salary = 4000;
        break;
      case 'programador':
        salary = 3000;
        break;
      case 'soporte':
        salary = 2000;
        break;
      case 'asistente':
        salary = 1000;
        break;
      default:
        "No existe el cargo"
        break;
    }
    return salary;
  }

  discount () {
    return this.grossSalary() * 0.125;
  }

  netSalary () {
    return this.grossSalary() - this.discount() ;
  }
}

const variable1 = new Employee(1, "juan", "perez", "juanperez123@gmail.com", "analista");
const variable2 = new Employee(2, "pedro", "mejia", "pedromejia@gmail.com", "programador");
const variable3 = new Employee(3, "jesus", "urbano", "jesusurbano1234@gmail.com", "asistente");

console.log(variable1.grossSalary());
console.log(variable1.discount());
console.log(variable1.netSalary());

console.log(variable2.grossSalary());
console.log(variable2.discount());
console.log(variable2.netSalary());

console.log(variable3.grossSalary());
console.log(variable3.discount());
console.log(variable3.netSalary());
