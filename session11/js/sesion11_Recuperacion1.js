let products = [
  { id: 1, name: "tv", description: "TV 55 Pulgadas", brand: "chanchum", type: "tech" },
  { id: 3, name: "cellphone", description: "Androy 6/128GB", brand:"chaiomi", type: "tech" },
  { id: 2, name: "tv", description: "TV 55 Pulgadas", brand: "elyi",type: "tech" },
  { id: 4, name: "tv", description: "TV 65 Pulgadas", brand:"panachonic", type: "tech" },
  { id: 5, name: "cellphone", description: "Aifon 6/256GB", brand:"apol", type: "tech" },
  { id: 6, name: "bed", description: "KingSize", brand: "paiso",type: "home" },
  { id: 10, name: "bed", description: "QueenSize", brand: "rochen",type: "home" },
  { id: 8, name: "washing machine", description: "12Lt", brand:"elyi", type: "home" },
  { id: 9, name: "washing machine", description: "10Lt", brand:"panachonic", type: "home" },
  { id: 7, name: "tv", description: "TV 75 Pulgadas", brand:"chanchum", type:"tech" }
]

//1. Crear una función que permita filtrar el arreglo de productos por cada atributo.
function filterProductsBy(atribute, value) {
  const validAtributes = Object.keys (products[0])
  if (validAtributes.includes(atribute)) {
    return products.filter (product => product[atribute] === value)
  } else {
    return "El atributo ingresado no existe"
  }
}

console.log(filterProductsBy("price", 1))

//2. Crear una función que permita ordenar el arreglo de productos por cada atributo (en orden alfabetico).
function ordenarProductosPorAtributo(atributo) {
  if (typeof products[0][atributo] === "string"){
    return products.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
  } else if (typeof products[0][atributo] === "number"){
    return products.sort((a,b) => {return a[atributo] - b[atributo]})
  } else {
    return "Por favor utiliza un atributo válido"
  }
}

console.log(ordenarProductosPorAtributo("id"))

//3. Crear una función que permita imprimir en pantalla los datos del objeto.

//El name, brand y type deben imprimirse en formato Capitalizado.
function capitalizar(string){
  return stringCapitalizado
}

for (const property in products[0]) {
  document.write(`${property}: ${capitalizar(products[0][property])}<br/>`)
}


//4. Añadir el atributo price a cada objeto. Para añadirlo utilizar un numero aleatorio entre 500 y 1500 para cada uno.

//5. Crear una función que me permita filtrar productos por precio, ingresando tambien el parametro mayor o menor que.

//6. Crear una función que me permita crear un nuevo objeto, ingresando los datos con prompts.

//7. Crear una función que me permita modificar los atributos de un objeto que haya seleccionado.

//8. Crear una función que me borrar uno o varios productos de mi arreglo según los valores de sus atributos.
