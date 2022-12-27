// 1. Solicitar a la Poke API la informacion de los pokemons de la generacion 1.
// 2. Con un Select, seleccionar el pokemon que se desee ver en pantalla.
// 3. Solicitar a la Poke API el sprite y data del pokemon.
// 4. Renderizar en pantalla la foto del pokemon y su nombre, centrados al medio de la pagina.

const resultPokemons = document.getElementById('root');

function fetchPokemons(params) {
  for (let i = 1; i <= params; i++) {
    fetchPokemon(i);
  }
}

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/generation/1`)
  .then(response => response.json())
  .then(data =>
    createPokemon(data)
  )
};

function createPokemon(pokemon) {
  const card = document.createElement('section');
  card.classList.add('card-pokemon');

  const spriteContaniner = document.createElement('section');
  spriteContaniner.classList.add('img-container');

  // const sprite = document.createElement('img');
  // sprite.src = pokemon.sprites.front_default;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.pokemon_species[0].name;

  // card.appendChild(sprite);
  card.appendChild(name);
  resultPokemons.appendChild(card);
}

fetchPokemons(5);


// const resultPokemons = document.getElementById('root');

// function fetchPokemons(params) {
//   for (let i = 1; i <= params; i++) {
//     fetchPokemon(i);
//   }
// }

// function fetchPokemon(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   .then(response => response.json())
//   .then(data =>
//     console.log(data)
//   )
// };

// function createPokemon(pokemon) {
//   const card = document.createElement('section');
//   card.classList.add('card-pokemon');

//   const spriteContaniner = document.createElement('section');
//   spriteContaniner.classList.add('img-container');

//   const sprite = document.createElement('img');
//   sprite.src = pokemon.sprites.front_default;

//   console.log(pokemon.sprites.front_default);

//   const name = document.createElement('p');
//   name.classList.add('name');
//   name.textContent = pokemon.name;

//   card.appendChild(sprite);
//   card.appendChild(name);
//   resultPokemons.appendChild(card);
// }

// fetchPokemons(9);
