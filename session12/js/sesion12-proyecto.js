let users = [
  {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "Developer", created_at: "2022-09-26T06:25:21.118Z",fecha_de_modificacion:"" },
  {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "Profesor", created_at: "2022-04-18T14:14:32.879Z",fecha_de_modificacion:"" },
  {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "Musico", created_at: "2022-04-18T14:14:32.879Z",fecha_de_modificacion:"" },
  {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "Programador", created_at: "2022-01-26T03:31:15.202Z",fecha_de_modificacion:"" },
  {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "Chef", created_at: "2022-07-27T02:06:22.760Z",fecha_de_modificacion :""},
  {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "Veterinario", created_at: "2022-05-01T22:06:35.864Z",fecha_de_modificacion :""},
  {id:7, nombre:"luis", apellido:"humpiri", edad:24, profesion:"dev", created_at:"Tue Dec 20 2022 00:37:15 GMT-0500 (hora estándar de Perú)",fecha_de_modificacion :""}
];

const root = document.getElementById("root")
const table = document.createElement("table")
table.setAttribute('border', '1')
root.append(table)
const encabezados = document.createElement("thead")

//-------------------------------BOTONES CRUD ----------------
const crud = document.getElementById("crud-container");

// ---boton create---
const btnCreate = document.createElement("button");
btnCreate.setAttribute("id","btn-create");
btnCreate.innerText = "Crear";
crud.append(btnCreate)

//---boton update--
const btnUpdate = document.createElement("button");
btnUpdate.setAttribute("id","btn-update");
btnUpdate.innerText = "Cambiar";
crud.append(btnUpdate)

//---boton read--
const btnRead = document.createElement("button");
btnRead.setAttribute("id","btn-read");
btnRead.innerText = "Leer"
crud.append(btnRead)

//---bton delete--
const btnDelete = document.createElement("button");
btnDelete.setAttribute("id","btn-delete");
btnDelete.innerText = "Eliminar"
crud.append(btnDelete)

//---btn filter
const btnFilter = document.createElement("button");
btnFilter.setAttribute("id","btn-filter");
btnFilter.innerText ="filtrar";
crud.append(btnFilter)

//------------------- atributos del objeto-----------------------------------
for (const key in users[0]){
    const th = document.createElement("th")
    th.textContent = capitalizarPalabra(key)
    th.style.cursor = "pointer"

    th.addEventListener("click", (e) =>{
      ordenarUsuarioPorAtributo(key)
      table.innerHTML = ""
      table.append(encabezados)
      construirCuerpo()
    })
    encabezados.append(th)
}
table.append(encabezados)
construirCuerpo()

//------------------filtrado por fecha-----------------

btnFilter.addEventListener("click",()=> {
    table.innerHTML ="";
    table.append(encabezados)
    filterUser();
}
);
function filterUser() {
    let date = prompt("ingrese fecha a filtrar");
    let objUser = users.filter((e)=>{
        if(e.created_at === date){
            return e.created_at;
        }
    });

    for (const index in objUser){
        const tr = document.createElement("tr")
            for (const key in objUser[index]){
                const td = document.createElement("td")
                td.textContent = objUser[index][key]
                tr.append(td)
            }
        table.append(tr)
    }
}


//------------------cuerpo de la tabla general--------------------------------

function construirCuerpo(){
    for (const index in users){
        const tr = document.createElement("tr")
            for (const key in users[index]){
                const td = document.createElement("td")
                td.textContent = users[index][key]
                tr.append(td)
            }
        table.append(tr)
    }
}

// // --adicional


function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}

function ordenarUsuarioPorAtributo(atributo){
    if (typeof users[0][atributo] === "string"){
        return users.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
    } else if (typeof users[0][atributo] === "number"){
        return users.sort((a,b) => {return a[atributo] - b[atributo]})
    } else {
        return "Por favor utiliza un atributo válido"
    }
}
// function desOrdenarValores(atributo) {
//     if (typeof users[0][atributo] === "string"){
//         return users.sort((a,b) => {return b[atributo].localeCompare(a[atributo])})
//     } else if (typeof users[0][atributo] === "number"){
//         return users.sort((a,b) => {return b[atributo] - a[atributo]})
//     } else {
//         return "Por favor utiliza un atributo válido"
//     }
// }

//----------
// function capitalizarPalabra(palabra){
//     return palabra.charAt(0).toUpperCase() + palabra.slice(1)
// }
// function ordenarUsuarioPorAtributo(atributo){
//     if (typeof users[0][atributo] === "string"){
//         return users.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})

//     } else if (typeof users[0][atributo] === "number"){
//         return users.sort((a,b) => {return a[atributo] - b[atributo]})
//     } else {
//         return "Por favor utiliza un atributo válido"
//     }
// }

//-----------------------create-----------------

btnCreate.addEventListener("click",()=>{
    table.innerHTML ="";
    table.append(encabezados)
    createUser();
    construirCuerpo();
});

class User{
    constructor(id,nombre,apellido,edad,profesion,created_at){
        this.id = id;
        this.nombre = nombre;
        this.apellido =apellido;
        this.edad = edad;
        this.profesion = profesion;
        this.created_at = created_at;
    }
}

function createUser() {
    let id = parseInt(prompt("ingrese ID"));
    let name = prompt("ingrese nombre");
    let lastName = prompt("ingrese apellido");
    let age = parseInt(prompt("ingrese edad"));
    let profession = prompt("ingrese profesion");
    let create = new Date();
    let user = new User(id,name,lastName,age,profession,create);

    if(id == "" || name == "" || lastName == "" || age == "" || profession == ""){
        alert("no es posible crear , los campos deben de estar llenos");

    }else{

      users.push(user);
    }
    return users;
}
//---------------read---------------
btnRead.addEventListener("click",()=>{
    table.innerHTML ="";
    table.append(encabezados)
    construirCuerpo();
});

//------------------------cambiar----------

btnUpdate.addEventListener("click",()=>{
    update(users)
    table.innerHTML = "";
    table.append(encabezados)
    construirCuerpo()
})
function update(objeto){

    let id = prompt("cual es el id del registro que quiere modificar")
    if(id==""){
        return "debes de escribir un id"
    }
    let objetoarray = users
    objeto.forEach( (elemento,i)=> {
        if(elemento.id == id){

            objetoarray[i].nombre = prompt("nombre es:")
            objetoarray[i].apellido = prompt("apellido es:")
            objetoarray[i].edad = prompt("edad es:")
            objetoarray[i].profesion = prompt("profesion es:")
            objetoarray[i].fecha_de_modificacion = creacion()
            console.log()

        }
    })
    users = objetoarray
    return users
}
function creacion(){
    let hora = new Date()
    return `${hora.toString()}`;
}

//------------------------------------eliminar

btnDelete.addEventListener("click", eliminarRegistro);

function eliminarRegistro(){
    let id = prompt("Ingrese el id del registro que desea borrar:");
    if(id){
    let registro = users.find(user => user.id == id);
    if(registro) {
    if (confirm("¿Está seguro de que desea eliminar el registro?")){
        users = users.filter(user => user.id != id);
        table.innerHTML = "";
        table.append(encabezados);
        construirCuerpo();
        alert("Registro eliminado exitosamente");
    }
    } else {
        lert("No se encontró ningún registro con ese id");
    }
    }
}
