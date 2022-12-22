//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"

function capitalizar(frase){
    let fraseCortada = frase.split(" ") // ["hola", "a", "todos", "los", "humanos"]
    let newArray = []
    for(let i = 0; i < fraseCortada.length ;i++){
        let nuevaPalabra = `${fraseCortada[i][0].toUpperCase()}${fraseCortada[i].substring(1)}`
        newArray.push(nuevaPalabra)
    }
    return newArray.join(" ")
}

//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.

let user = {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}

function revisarVacio(objeto){
    for(const prop in objeto){
        if (objeto[prop] === ""){
            objeto[prop] = prompt(`El dato ${prop} esta vacío, por favor ingreselo:`)
        }
    }
    return objeto
}

//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.
//4. Te enviaron una base de datos de usuarios:

let users = [
    {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
    {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
    {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.

//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.

console.log(users.sort((a,b) => {return a.edad - b.edad}))
