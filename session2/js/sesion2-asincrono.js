// Caso Propuesto:
// Una tienda pone a la venta varios juguetes, los precios por cada producto se indican en el siguiente cuadro:
// Juguetes	Precio (S/.)
// Monopolio	70.99
// Ajedrez	78.99
// Lego	100.99
// Dama	58.50
// Laberinto	35.00
// La tienda realiza ofertas de acuerdo con la cantidad de juguetes que se compra, estos se indican en el siguiente cuadro:
// Cantidad de juguetes	Descuento (%)
// < 10	3.5
// ≥ 10 Y ≤ 20	7.0
// >20	9.5

// Se pide calcular el importe de compra, el importe descuento e importe a pagar. Mostrar todos los datos de entrada y salida en la página web.

// const btn_calculate = document.getElementById('btn_calculate');

// btn_calculate.addEventListener('click', discount)

// const resultDiscount = document.getElementById('resultDiscount');

// function discount() {
//   const price1 = document.getElementsByClassName('price1')[0].innerHTML
//   const input1 = document.getElementsByClassName('input1').value

// }

let priceMonopolyHtml= document.getElementsByClassName('priceMonopoly');
let priceMonopoly =parseInt(priceMonopolyHtml[0].innerText)

let inputMonopoly = document.getElementsByClassName('inputMonopoly');
let 

function discount(price = 0, count= 0) {
  if (count < 10) {
    let discount1 = price * count * 0.03;
    return
  } else if (count <=20 ) {

    return price - discount;
  } else {
    const discount = price*0.095;
    return price - discount;
  }
}

console.log(discount (50, 1));

// /* Ejercicio 2 */
// const btn_promedio = document.getElementById('btn_promedio');

// const p_promedio = document.getElementById('p_promedio');

// btn_promedio.addEventListener('click', promedio);

// function promedio(){
//     const nombre = document.getElementById('nombre').value;
//     const n_parcial = parseFloat(document.getElementById('n_parcial').value);
//     const n_final = parseFloat(document.getElementById('n_final').value);
//     const n_practicas = parseFloat(document.getElementById('n_practicas').value);
//     let promedio_final = (n_parcial*0.25)+(n_final*0.5)+(n_practicas*0.25);
//     if(promedio_final>=11){
//       p_promedio.innerText =`APROBADO: ${nombre} tiene un promedio final de ${promedio_final}`
//     } else {
//       p_promedio.innerText = `DESAPROBADO: El alumno ${nombre}`;
//     }
// }

// <article>
//             <h2>Ejercicio 2</h2>

//             <section class="conjunto">
//                 <label>Nombre del alumno:</label>
//                 <input placeholder="Escribe aquí tu nombre" required="required" type="text" class="nombre" id="nombre">
//             </section>

//             <section class="conjunto">
//                 <label>Nota del examen parcial:</label>
//                 <input value="0" required="required" type="number" class="n_parcial" id="n_parcial">
//             </section>

//             <section class="conjunto">
//                 <label>Nota del examen final:</label>
//                 <input value="0" required="required" type="number" class="n_final" id="n_final">
//             </section>

//             <section class="conjunto">
//                 <label>Promedio de práctias:</label>
//                 <input value="0" required="required" type="number" class="n_practicas" id="n_practicas">
//             </section>

//             <p><em>Respuesta:</em></p>

//             <p class="resultado" id="p_promedio"></p>

//             <button id="btn_promedio">Calcular 🔎💡📚</button>

//       </article>
