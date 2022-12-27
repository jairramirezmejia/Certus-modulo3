// --- POKEMON LIST --- //
// Esta página es similar a la que hicimos en clase: Debe mostrar un selector con los nombres de los pokemones de la generación 1 y una imagen del pokemon con su nombre al medio de la pantalla.
// Debe existir un botón: “agregar a favoritos” para agregarlo a la base de datos de pokemons favoritos y se debe solicitar confirmación del usuario.
// Al tenerlo de favorito el background del nombre del pokemon debe cambiar de color para que el usuario pueda distinguir que dicho pokemon es parte de sus favoritos.

const resultPokemons = document.getElementById('container');
const url = "https://pokeapi.co/api/v2/generation/1";

fetch(url)
.then(response => response.json())
.then(data => viewPokemons(data))
.catch(error => console.error(error))

function viewPokemons (params) {
  let pokemon = params.pokemon_species.map( element => {
    return element.name
  })
  let select = document.createElement("select");
  select.classList.add('select-pokemon')

  for (const val of pokemon) {
    let option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
  }

  let label = document.createElement("label");
  label.innerHTML = "Selecciona un pokemon: "
  resultPokemons.appendChild(label).appendChild(select);
}

// ----------------------------------------

// fetchPokemons(9);

// function fetchPokemons(params) {
//   for (let i = 1; i <= params; i++) {
//     fetchPokemon(i);
//   }
// }

// function fetchPokemon(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   .then(response => response.json())
//   .then(data =>
//     createPokemon(data)
//   )
// };

// function createPokemon(pokemon) {

//   const card = document.createElement('section');
//   card.classList.add('card-pokemon');

//   const img = document.createElement('img');
//   img.src = pokemon.sprites.front_default;

//   const name = document.createElement('p');
//   name.classList.add('name-pokemon');
//   name.textContent = pokemon.name;

//   card.appendChild(img);
//   card.appendChild(name);
//   resultPokemons.appendChild(card);
// }
