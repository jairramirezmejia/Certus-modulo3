// --- POKEMON LIST --- //
// Esta página es similar a la que hicimos en clase: Debe mostrar un selector con los nombres de los pokemones de la generación 1 y una imagen del pokemon con su nombre al medio de la pantalla.
// Debe existir un botón: “agregar a favoritos” para agregarlo a la base de datos de pokemons favoritos y se debe solicitar confirmación del usuario.
// Al tenerlo de favorito el background del nombre del pokemon debe cambiar de color para que el usuario pueda distinguir que dicho pokemon es parte de sus favoritos.

const resultPokemons = document.getElementById('container');
const url = "https://pokeapi.co/api/v2/";
const resultCard = document.getElementById('resultCard');
const viewPokemonSelection = document.getElementById('viewPokemonSelection');

fetch(url + "generation/1")
  .then(response => response.json())
  .then(data => createListPokemon(data));

function createListPokemon(pokemon) {
  const arrayPokemon = pokemon.pokemon_species.map (element => {
    return element.name
  });
  let form = document.createElement("form");
  let label = document.createElement("label");
  label.innerText = "Selecciona un pokemon: "
  let select = document.createElement("select");
  select.setAttribute("id",'selectPokemon')
  for (const val of arrayPokemon) {
    let option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
  }
  resultPokemons.appendChild(form).appendChild(label).appendChild(select);
}

viewPokemonSelection.onclick = (event) => {
  event.preventDefault();
  let namePokemon = document.getElementById('selectPokemon');
  resultCard.innerHTML =`<p> ${namePokemon.value.toUpperCase()} </p>`;
  fetch(url + "pokemon/" + namePokemon.value)
    .then(response => response.json())
    .then (data => imgPokemon(data))
    .catch(error => console.error(error));
}

function imgPokemon(pokemon) {
  const imgPokemon = document.createElement('img');
  imgPokemon.setAttribute("id", "img-pokemon");
  imgPokemon.src = pokemon.sprites.other.home.front_default;
  resultCard.appendChild(imgPokemon);
}

addFavoritePokemon.onclick = (event) => {
  if (resultCard.classList.contains('change-background')) {
    resultCard.classList.remove('change-background')
  } else {
    resultCard.classList.add('change-background');
  }
}
