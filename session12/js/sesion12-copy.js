let users = [
  {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "Developer", created_at: "2022-09-26T06:25:21.118Z",fecha_de_modificacion:"" },
  {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "Profesor", created_at: "2022-04-18T14:14:32.879Z",fecha_de_modificacion:"" },
  {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "Musico", created_at: "2022-04-18T14:14:32.879Z",fecha_de_modificacion:"" },
  {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "Programador", created_at: "2022-01-26T03:31:15.202Z",fecha_de_modificacion:"" },
  {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "Chef", created_at: "2022-07-27T02:06:22.760Z",fecha_de_modificacion :""},
  {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "Veterinario", created_at: "2022-05-01T22:06:35.864Z",fecha_de_modificacion :""},
  {id:7, nombre:"luis", apellido:"humpiri", edad:24, profesion:"dev", created_at:"Tue Dec 20 2022 00:37:15 GMT-0500 (hora estándar de Perú)",fecha_de_modificacion :""}
];

const root = document.getElementById("root");

// --- boton create--- //
const btnCreate = document.createElement("button");
btnCreate.setAttribute("id","btn-create");
btnCreate.innerText = "Agregar";
root.append(btnCreate);

//--- boton update ---//
const btnUpdate = document.createElement("button");
btnUpdate.setAttribute("id","btn-update");
btnUpdate.innerText = "Editar";
root.append(btnUpdate);

//--- boton delete --- //
const btnDelete = document.createElement("button");
btnDelete.setAttribute("id","btn-delete");
btnDelete.innerText = "Eliminar"
root.append(btnDelete);

// ----------- FILTRAR -----------  //

//--- boton de filtrado--- //
const btnFilter = document.createElement("button");
btnFilter.setAttribute("id","btn-filter");
btnFilter.innerText ="filtrar";
root.append(btnFilter)

// --- Crear Tabla --- //
const table = document.createElement("table");
table.setAttribute('border', '1')
root.append(table);

// --- Crear Head de la tabla --- //
const tableHead = document.createElement("thead")
table.append(tableHead);

buildTable();

// --- Mostrar Tabla --- //
for (const key in users[0]){
  const th = document.createElement("th")
  th.textContent = key
  // cambia el cursor por la manito
  th.style.cursor = "pointer"
  th.addEventListener("click", (e) =>{
    sortUsersByAttribute(key);
    table.innerHTML = "";
    table.append(tableHead);
    buildTable();
  });
  tableHead.append(th);
}

// --- Construir tabla --- //
function buildTable(){
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

// --- Ordenar Usuarios por Atributo ---//
function sortUsersByAttribute(attribute){
  if (typeof users[0][attribute] === "string"){
    return users.sort((a,b) => {return a[attribute].localeCompare(b[attribute])})
  } else if (typeof users[0][attribute] === "number"){
    return users.sort((a,b) => {return a[attribute] - b[attribute]})
  } else {
    return "Por favor utiliza un atributo válido"
  }
}

// --- Evento para filtrar --- //
btnFilter.addEventListener("click",()=> {
  table.innerHTML ="";
  table.append(tableHead);
  filterUser();
});

// ---- Función de filtrado ---- //
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
